import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/catalog", label: "页面清单" },
  { to: "/preview", label: "参考界面" },
  { to: "/login", label: "登录页" },
  { to: "/worker/home", label: "兼职者首页" },
  { to: "/recruiter/home", label: "招聘方首页" },
  { to: "/admin/dashboard", label: "后台看板" }
];

export default function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-title">职兼兼职兼平台</p>
          <p className="app-subtitle">页面清单与参考界面（可运行 Demo）</p>
        </div>
        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
