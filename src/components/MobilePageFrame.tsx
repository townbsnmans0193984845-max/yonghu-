import type { ReactNode } from "react";

type MobilePageFrameProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function MobilePageFrame({
  title,
  subtitle,
  children
}: MobilePageFrameProps) {
  return (
    <div className="mobile-page">
      <header className="mobile-page__header">
        <span className="ghost-link">返回</span>
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <span className="icon-dot">⋯</span>
      </header>
      <div className="mobile-page__body">{children}</div>
    </div>
  );
}
