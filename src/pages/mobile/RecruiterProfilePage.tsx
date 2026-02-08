import MobilePageFrame from "../../components/MobilePageFrame";

export default function RecruiterProfilePage() {
  return (
    <MobilePageFrame title="个人中心" subtitle="招聘方">
      <div className="profile-card">
        <div className="avatar">🏢</div>
        <div>
          <h3>XX超市</h3>
          <p className="muted">联系人：王经理</p>
          <p className="tiny">信用分：95</p>
        </div>
      </div>
      <ul className="menu-list">
        <li>我的企业</li>
        <li>发布记录</li>
        <li>账户设置</li>
        <li className="divider" />
        <li>帮助中心</li>
        <li>联系客服</li>
        <li>退出登录</li>
      </ul>
    </MobilePageFrame>
  );
}
