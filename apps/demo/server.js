import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import {
  db,
  createSession,
  getUserByToken,
  createJob,
  createApplication,
  updateApplicationStatus,
} from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

const json = (res, statusCode, payload) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
};

const getAuthUser = (req) => {
  const authHeader = req.headers.authorization ?? "";
  const token = authHeader.replace("Bearer ", "");
  const user = getUserByToken(token);
  return { user, token };
};

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  if (chunks.length === 0) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf-8"));
  } catch (error) {
    return {};
  }
};

const sendStatic = async (req, res, pathname) => {
  const normalized = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(publicDir, normalized));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end();
    return;
  }
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    };
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "text/plain" });
    res.end(data);
  } catch (error) {
    res.writeHead(404);
    res.end();
  }
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = url;

  if (!pathname.startsWith("/api")) {
    await sendStatic(req, res, pathname);
    return;
  }

  if (req.method === "POST" && pathname === "/api/auth/register") {
    const { phone, role, name } = await parseBody(req);
    if (!phone || !role) {
      return json(res, 400, { message: "手机号和角色必填" });
    }
    const existing = db.users.find((user) => user.phone === phone);
    if (existing) {
      const token = createSession(existing.id);
      return json(res, 200, {
        token,
        user: existing,
        message: "账号已存在，已自动登录",
      });
    }
    const user = {
      id: `user_${db.users.length + 1}`,
      phone,
      role,
      name: name || "新用户",
      creditScore: 100,
      createdAt: new Date().toISOString(),
    };
    db.users.push(user);
    const token = createSession(user.id);
    return json(res, 200, { token, user });
  }

  if (req.method === "POST" && pathname === "/api/auth/login") {
    const { phone } = await parseBody(req);
    const user = db.users.find((item) => item.phone === phone);
    if (!user) {
      return json(res, 404, { message: "用户不存在，请先注册" });
    }
    const token = createSession(user.id);
    return json(res, 200, { token, user });
  }

  if (req.method === "GET" && pathname === "/api/auth/me") {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    return json(res, 200, { user });
  }

  if (req.method === "GET" && pathname === "/api/jobs") {
    const jobs = db.jobs.filter((job) => job.status === "open");
    return json(res, 200, { jobs });
  }

  if (req.method === "GET" && pathname.startsWith("/api/jobs/")) {
    const jobId = pathname.split("/").pop();
    const job = db.jobs.find((item) => item.id === jobId);
    if (!job) {
      return json(res, 404, { message: "岗位不存在" });
    }
    return json(res, 200, { job });
  }

  if (req.method === "POST" && pathname === "/api/jobs") {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    if (user.role !== "recruiter") {
      return json(res, 403, { message: "仅招聘方可发布岗位" });
    }
    const { title, description, salary, salaryUnit, location, requiredWorkers } =
      await parseBody(req);
    if (!title || !description) {
      return json(res, 400, { message: "标题和描述必填" });
    }
    const job = createJob({
      recruiterId: user.id,
      payload: { title, description, salary, salaryUnit, location, requiredWorkers },
    });
    return json(res, 200, { job });
  }

  if (req.method === "POST" && pathname.endsWith("/apply")) {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    if (user.role !== "worker") {
      return json(res, 403, { message: "仅兼职者可以报名" });
    }
    const jobId = pathname.split("/")[3];
    const job = db.jobs.find((item) => item.id === jobId);
    if (!job) {
      return json(res, 404, { message: "岗位不存在" });
    }
    const existing = db.applications.find(
      (item) => item.jobId === job.id && item.workerId === user.id,
    );
    if (existing) {
      return json(res, 409, { message: "已报名该岗位" });
    }
    const application = createApplication({ jobId: job.id, workerId: user.id });
    job.currentApplications += 1;
    return json(res, 200, { application });
  }

  if (req.method === "GET" && pathname === "/api/applications/me") {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    const applications = db.applications.filter((item) => {
      if (user.role === "worker") {
        return item.workerId === user.id;
      }
      const job = db.jobs.find((jobItem) => jobItem.id === item.jobId);
      return job?.recruiterId === user.id;
    });
    return json(res, 200, { applications });
  }

  if (req.method === "POST" && pathname.startsWith("/api/applications/")) {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    const segments = pathname.split("/");
    const applicationId = segments[3];
    const action = segments[4];
    const application = db.applications.find((item) => item.id === applicationId);
    if (!application) {
      return json(res, 404, { message: "报名不存在" });
    }
    if (action === "accept") {
      if (user.role !== "recruiter") {
        return json(res, 403, { message: "仅招聘方可操作" });
      }
      updateApplicationStatus({ application, status: "accepted" });
      return json(res, 200, { application });
    }
    if (action === "reject") {
      if (user.role !== "recruiter") {
        return json(res, 403, { message: "仅招聘方可操作" });
      }
      updateApplicationStatus({ application, status: "rejected" });
      return json(res, 200, { application });
    }
    if (action === "check-in") {
      if (user.role !== "worker") {
        return json(res, 403, { message: "仅兼职者可打卡" });
      }
      updateApplicationStatus({ application, status: "checked_in" });
      return json(res, 200, { application });
    }
    if (action === "check-out") {
      if (user.role !== "worker") {
        return json(res, 403, { message: "仅兼职者可打卡" });
      }
      updateApplicationStatus({ application, status: "checked_out" });
      return json(res, 200, { application });
    }
    if (action === "complete") {
      if (user.role !== "recruiter") {
        return json(res, 403, { message: "仅招聘方可确认完工" });
      }
      updateApplicationStatus({ application, status: "completed" });
      return json(res, 200, { application });
    }
  }

  if (req.method === "GET" && pathname === "/api/admin/summary") {
    const { user } = getAuthUser(req);
    if (!user) {
      return json(res, 401, { message: "未登录或登录已过期" });
    }
    if (user.role !== "recruiter") {
      return json(res, 403, { message: "仅招聘方可查看" });
    }
    const jobs = db.jobs.filter((job) => job.recruiterId === user.id);
    const applications = db.applications.filter((item) =>
      jobs.some((job) => job.id === item.jobId),
    );
    return json(res, 200, {
      metrics: {
        jobs: jobs.length,
        applications: applications.length,
        active: applications.filter((item) => item.status === "accepted").length,
      },
    });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Not Found" }));
});

const PORT = process.env.PORT || 5179;
server.listen(PORT, () => {
  console.log(`Demo app running on http://localhost:${PORT}`);
});
