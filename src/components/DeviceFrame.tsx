import type { ReactNode } from "react";

type DeviceFrameProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "mobile" | "admin";
};

export default function DeviceFrame({
  title,
  subtitle,
  children,
  variant = "mobile"
}: DeviceFrameProps) {
  return (
    <section className={`device-frame device-frame--${variant}`}>
      <header>
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </header>
      <div className="device-frame__body">{children}</div>
    </section>
  );
}
