import type { ReactNode } from "react";

type AdminPageFrameProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AdminPageFrame({
  title,
  subtitle,
  children
}: AdminPageFrameProps) {
  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <span className="ghost-pill">管理员</span>
      </header>
      <div className="admin-page__body">{children}</div>
    </div>
  );
}
