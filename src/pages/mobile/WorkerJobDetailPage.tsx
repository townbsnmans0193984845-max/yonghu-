import MobilePageFrame from "../../components/MobilePageFrame";

export default function WorkerJobDetailPage() {
  return (
    <MobilePageFrame title="岗位详情" subtitle="超市促销员">
      <div className="job-detail">
        <h3>超市促销员</h3>
        <p className="price">¥50/小时</p>
        <p className="muted">📍 北京市朝阳区XX路XX号</p>
        <div className="detail-card">
          <h4>岗位描述</h4>
          <p>负责超市内商品推广、引导顾客试吃与购买。</p>
          <span className="ghost-link">展开更多</span>
        </div>
        <div className="detail-card">
          <h4>招聘方</h4>
          <p>XX超市</p>
          <p className="muted">⭐ 4.8 · 信用分 95 · 已完成 50 单</p>
          <span className="ghost-link">查看详情</span>
        </div>
        <div className="detail-info">
          <span>工作时间：2026-02-10 09:00-18:00</span>
          <span>招聘人数：5 人</span>
          <span>已报名：3 人</span>
        </div>
        <div className="bottom-actions">
          <button className="ghost-button">立即沟通</button>
          <button className="primary-button">立即报名</button>
        </div>
      </div>
    </MobilePageFrame>
  );
}
