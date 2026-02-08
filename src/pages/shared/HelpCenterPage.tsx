import MobilePageFrame from "../../components/MobilePageFrame";

export default function HelpCenterPage() {
  return (
    <MobilePageFrame title="帮助中心" subtitle="常见问题与指引">
      <div className="detail-card">
        <h4>报名相关</h4>
        <p className="muted">如何报名兼职？报名后如何取消？</p>
        <span className="ghost-link">查看详情</span>
      </div>
      <div className="detail-card">
        <h4>打卡结算</h4>
        <p className="muted">上岗/下岗打卡流程与结算说明。</p>
        <span className="ghost-link">查看详情</span>
      </div>
      <div className="detail-card">
        <h4>押金与信用分</h4>
        <p className="muted">押金冻结规则与信用分计算方式。</p>
        <span className="ghost-link">查看详情</span>
      </div>
    </MobilePageFrame>
  );
}
