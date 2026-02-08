import MobilePageFrame from "../../components/MobilePageFrame";

export default function WorkerProfilePage() {
  return (
    <MobilePageFrame title="个人中心" subtitle="兼职者">
      <div className="profile-card">
        <div className="avatar">👤</div>
        <div>
          <h3>张三</h3>
          <p className="muted">138****1234</p>
          <p className="tiny">信用分：95</p>
        </div>
      </div>
      <ul className="menu-list">
        <li>我的资料</li>
        <li>我的技能标签</li>
        <li>常用地址</li>
        <li>账户安全</li>
        <li className="divider" />
        <li>帮助中心</li>
        <li>关于我们</li>
        <li>退出登录</li>
      </ul>
    </MobilePageFrame>
  );
}
