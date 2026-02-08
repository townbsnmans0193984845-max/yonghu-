import MobilePageFrame from "../../components/MobilePageFrame";

export default function AboutPage() {
  return (
    <MobilePageFrame title="关于我们" subtitle="职兼兼职兼平台">
      <div className="detail-card">
        <h4>平台定位</h4>
        <p className="muted">
          即时结算、强约束履约的兼职招聘平台，保障兼职者与招聘方权益。
        </p>
      </div>
      <div className="detail-card">
        <h4>联系方式</h4>
        <p className="muted">客服电话：400-123-4567</p>
        <p className="muted">工作日 9:00-18:00</p>
      </div>
      <div className="detail-card">
        <h4>版本信息</h4>
        <p className="muted">v1.0 MVP · 2026-02-05</p>
      </div>
    </MobilePageFrame>
  );
}
