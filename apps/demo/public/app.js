const API_BASE = "/api";

const elements = {
  phone: document.querySelector("#phone"),
  name: document.querySelector("#name"),
  role: document.querySelector("#role"),
  register: document.querySelector("#register"),
  login: document.querySelector("#login"),
  logout: document.querySelector("#logout"),
  sessionUser: document.querySelector("#session-user"),
  jobList: document.querySelector("#job-list"),
  refreshJobs: document.querySelector("#refresh-jobs"),
  jobTitle: document.querySelector("#job-title"),
  jobSalary: document.querySelector("#job-salary"),
  jobLocation: document.querySelector("#job-location"),
  jobWorkers: document.querySelector("#job-workers"),
  jobDescription: document.querySelector("#job-description"),
  createJob: document.querySelector("#create-job"),
  applicationList: document.querySelector("#application-list"),
  refreshApplications: document.querySelector("#refresh-applications"),
  recruiterMetrics: document.querySelector("#recruiter-metrics"),
};

const state = {
  token: localStorage.getItem("demo_token"),
  user: null,
  jobs: [],
  applications: [],
};

const saveSession = (token) => {
  if (token) {
    localStorage.setItem("demo_token", token);
  } else {
    localStorage.removeItem("demo_token");
  }
  state.token = token;
};

const request = async (path, options = {}) => {
  const headers = new Headers(options.headers || {});
  if (state.token) {
    headers.set("Authorization", `Bearer ${state.token}`);
  }
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || "请求失败");
  }
  return payload;
};

const renderSession = () => {
  if (!state.user) {
    elements.sessionUser.textContent = "未登录";
    return;
  }
  elements.sessionUser.textContent = `${state.user.name} (${state.user.role === "worker" ? "兼职者" : "招聘方"})`;
};

const renderJobs = () => {
  if (state.jobs.length === 0) {
    elements.jobList.innerHTML = "<p class=\"empty\">暂无岗位</p>";
    return;
  }
  elements.jobList.innerHTML = state.jobs
    .map((job) => {
      return `
        <article class="item">
          <header>
            <h3>${job.title}</h3>
            <span>${job.salary}元/${job.salaryUnit === "hour" ? "小时" : "天"}</span>
          </header>
          <p>${job.description}</p>
          <p class="meta">地点：${job.location || "待定"}｜需求：${job.requiredWorkers}人｜已报名：${job.currentApplications}人</p>
          <div class="actions">
            <button data-action="apply" data-id="${job.id}">立即报名</button>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderApplications = () => {
  if (state.applications.length === 0) {
    elements.applicationList.innerHTML = "<p class=\"empty\">暂无报名记录</p>";
    return;
  }
  elements.applicationList.innerHTML = state.applications
    .map((application) => {
      const job = state.jobs.find((item) => item.id === application.jobId);
      const title = job?.title || "岗位";
      const statusLabel = {
        pending: "待审核",
        accepted: "已录用",
        rejected: "已拒绝",
        checked_in: "已上岗",
        checked_out: "已下岗",
        completed: "已完工",
      }[application.status];
      const actions = [];
      if (state.user?.role === "worker" && application.status === "accepted") {
        actions.push(`<button data-action="check-in" data-id="${application.id}">上岗打卡</button>`);
        actions.push(`<button data-action="check-out" data-id="${application.id}" class="ghost">下岗打卡</button>`);
      }
      if (state.user?.role === "recruiter" && application.status === "pending") {
        actions.push(`<button data-action="accept" data-id="${application.id}">录用</button>`);
        actions.push(`<button data-action="reject" data-id="${application.id}" class="ghost">拒绝</button>`);
      }
      if (state.user?.role === "recruiter" && application.status === "checked_out") {
        actions.push(`<button data-action="complete" data-id="${application.id}">确认完工</button>`);
      }
      return `
        <article class="item">
          <header>
            <h3>${title}</h3>
            <span>${statusLabel}</span>
          </header>
          <p class="meta">报名时间：${new Date(application.appliedDate).toLocaleString()}</p>
          <div class="actions">${actions.join("")}</div>
        </article>
      `;
    })
    .join("");
};

const loadJobs = async () => {
  const { jobs } = await request("/jobs");
  state.jobs = jobs;
  renderJobs();
};

const loadApplications = async () => {
  if (!state.token) {
    state.applications = [];
    renderApplications();
    return;
  }
  const { applications } = await request("/applications/me");
  state.applications = applications;
  renderApplications();
};

const loadMetrics = async () => {
  if (!state.token || state.user?.role !== "recruiter") {
    elements.recruiterMetrics.innerHTML = "";
    return;
  }
  const { metrics } = await request("/admin/summary");
  elements.recruiterMetrics.innerHTML = `
    <div class="metric">
      <span>岗位数</span>
      <strong>${metrics.jobs}</strong>
    </div>
    <div class="metric">
      <span>报名数</span>
      <strong>${metrics.applications}</strong>
    </div>
    <div class="metric">
      <span>已录用</span>
      <strong>${metrics.active}</strong>
    </div>
  `;
};

const syncSession = async () => {
  if (!state.token) {
    state.user = null;
    renderSession();
    return;
  }
  try {
    const { user } = await request("/auth/me");
    state.user = user;
  } catch (error) {
    saveSession(null);
    state.user = null;
  }
  renderSession();
};

const handleAuth = async (mode) => {
  const payload = {
    phone: elements.phone.value.trim(),
    name: elements.name.value.trim(),
    role: elements.role.value,
  };
  if (!payload.phone) {
    alert("请输入手机号");
    return;
  }
  const endpoint = mode === "register" ? "/auth/register" : "/auth/login";
  const { token, user, message } = await request(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  saveSession(token);
  state.user = user;
  renderSession();
  await loadJobs();
  await loadApplications();
  await loadMetrics();
  if (message) {
    alert(message);
  }
};

const handleJobAction = async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  if (!action) return;
  if (!state.token) {
    alert("请先登录");
    return;
  }
  if (action === "apply") {
    await request(`/jobs/${button.dataset.id}/apply`, { method: "POST" });
    await loadJobs();
    await loadApplications();
  }
};

const handleApplicationAction = async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  if (!action) return;
  if (!state.token) {
    alert("请先登录");
    return;
  }
  await request(`/applications/${button.dataset.id}/${action}`, { method: "POST" });
  await loadApplications();
  await loadMetrics();
};

const handleCreateJob = async () => {
  if (!state.token) {
    alert("请先登录");
    return;
  }
  const payload = {
    title: elements.jobTitle.value.trim(),
    description: elements.jobDescription.value.trim(),
    salary: elements.jobSalary.value.trim() || 25,
    salaryUnit: "hour",
    location: elements.jobLocation.value.trim(),
    requiredWorkers: elements.jobWorkers.value.trim() || 1,
  };
  if (!payload.title || !payload.description) {
    alert("请填写岗位标题和描述");
    return;
  }
  await request("/jobs", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  elements.jobTitle.value = "";
  elements.jobDescription.value = "";
  await loadJobs();
  await loadMetrics();
};

const boot = async () => {
  elements.register.addEventListener("click", () => handleAuth("register"));
  elements.login.addEventListener("click", () => handleAuth("login"));
  elements.logout.addEventListener("click", () => {
    saveSession(null);
    state.user = null;
    renderSession();
    loadApplications();
    loadMetrics();
  });
  elements.refreshJobs.addEventListener("click", loadJobs);
  elements.jobList.addEventListener("click", handleJobAction);
  elements.applicationList.addEventListener("click", handleApplicationAction);
  elements.createJob.addEventListener("click", handleCreateJob);
  elements.refreshApplications.addEventListener("click", loadApplications);

  await syncSession();
  await loadJobs();
  await loadApplications();
  await loadMetrics();
};

boot();
