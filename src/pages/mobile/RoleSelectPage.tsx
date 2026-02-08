import MobilePageFrame from "../../components/MobilePageFrame";

export default function RoleSelectPage() {
  return (
    <MobilePageFrame title="选择你的身份" subtitle="选择后进入对应工作台">
      <div className="role-grid">
        <button className="role-card">
          <span className="role-icon">👷</span>
          <div>
            <h3>兼职者</h3>
            <p>找兼职，接任务</p>
          </div>
        </button>
        <button className="role-card">
          <span className="role-icon">👔</span>
          <div>
            <h3>招聘方</h3>
            <p>发布兼职任务</p>
          </div>
        </button>
      </div>
    </MobilePageFrame>
  );
}
