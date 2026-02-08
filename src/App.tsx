import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import CatalogPage from "./pages/CatalogPage";
import PreviewPage from "./pages/PreviewPage";
import LoginPage from "./pages/mobile/LoginPage";
import RegisterPage from "./pages/mobile/RegisterPage";
import RoleSelectPage from "./pages/mobile/RoleSelectPage";
import WorkerHomePage from "./pages/mobile/WorkerHomePage";
import WorkerJobDetailPage from "./pages/mobile/WorkerJobDetailPage";
import WorkerApplicationsPage from "./pages/mobile/WorkerApplicationsPage";
import WorkerProfilePage from "./pages/mobile/WorkerProfilePage";
import RecruiterHomePage from "./pages/mobile/RecruiterHomePage";
import RecruiterPostJobPage from "./pages/mobile/RecruiterPostJobPage";
import RecruiterApplicationsPage from "./pages/mobile/RecruiterApplicationsPage";
import RecruiterProfilePage from "./pages/mobile/RecruiterProfilePage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminJobsPage from "./pages/admin/AdminJobsPage";
import AdminApplicationsPage from "./pages/admin/AdminApplicationsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/shared/AboutPage";
import HelpCenterPage from "./pages/shared/HelpCenterPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/catalog" replace />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/role-select" element={<RoleSelectPage />} />
        <Route path="/worker/home" element={<WorkerHomePage />} />
        <Route path="/worker/job-detail/:id" element={<WorkerJobDetailPage />} />
        <Route path="/worker/my-applications" element={<WorkerApplicationsPage />} />
        <Route path="/worker/profile" element={<WorkerProfilePage />} />
        <Route path="/recruiter/home" element={<RecruiterHomePage />} />
        <Route path="/recruiter/post-job" element={<RecruiterPostJobPage />} />
        <Route
          path="/recruiter/applications/:jobId"
          element={<RecruiterApplicationsPage />}
        />
        <Route path="/recruiter/profile" element={<RecruiterProfilePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/jobs" element={<AdminJobsPage />} />
        <Route path="/admin/applications" element={<AdminApplicationsPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
        <Route path="/shared/help-center" element={<HelpCenterPage />} />
        <Route path="/shared/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
