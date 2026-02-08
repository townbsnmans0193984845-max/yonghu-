import { randomUUID } from "crypto";

const createDemoJob = (recruiterId) => ({
  id: randomUUID(),
  recruiterId,
  title: "活动引导员",
  description: "负责线下活动引导与签到，需准时到岗。",
  salary: 25,
  salaryUnit: "hour",
  location: "上海市徐汇区",
  requiredWorkers: 3,
  currentApplications: 0,
  status: "open",
  createdAt: new Date().toISOString(),
});

const createDemoUsers = () => {
  const recruiter = {
    id: randomUUID(),
    phone: "13800000001",
    role: "recruiter",
    name: "星河传媒",
    creditScore: 100,
    createdAt: new Date().toISOString(),
  };
  const worker = {
    id: randomUUID(),
    phone: "13800000002",
    role: "worker",
    name: "李小梅",
    creditScore: 100,
    createdAt: new Date().toISOString(),
  };
  return { recruiter, worker };
};

const { recruiter, worker } = createDemoUsers();

export const db = {
  users: [recruiter, worker],
  jobs: [createDemoJob(recruiter.id)],
  applications: [],
  sessions: new Map(),
};

export const createSession = (userId) => {
  const token = `token_${randomUUID()}`;
  db.sessions.set(token, userId);
  return token;
};

export const getUserByToken = (token) => {
  const userId = db.sessions.get(token);
  if (!userId) return null;
  return db.users.find((user) => user.id === userId) ?? null;
};

export const createJob = ({ recruiterId, payload }) => {
  const job = {
    id: randomUUID(),
    recruiterId,
    title: payload.title,
    description: payload.description,
    salary: Number(payload.salary),
    salaryUnit: payload.salaryUnit ?? "hour",
    location: payload.location,
    requiredWorkers: Number(payload.requiredWorkers ?? 1),
    currentApplications: 0,
    status: "open",
    createdAt: new Date().toISOString(),
  };
  db.jobs.push(job);
  return job;
};

export const createApplication = ({ jobId, workerId }) => {
  const application = {
    id: randomUUID(),
    jobId,
    workerId,
    status: "pending",
    appliedDate: new Date().toISOString(),
    checkInAt: null,
    checkOutAt: null,
    completedAt: null,
  };
  db.applications.push(application);
  return application;
};

export const updateApplicationStatus = ({ application, status }) => {
  application.status = status;
  if (status === "checked_in") {
    application.checkInAt = new Date().toISOString();
  }
  if (status === "checked_out") {
    application.checkOutAt = new Date().toISOString();
  }
  if (status === "completed") {
    application.completedAt = new Date().toISOString();
  }
  return application;
};
