import MobilePageFrame from "../../components/MobilePageFrame";
import Tag from "../../components/Tag";

export default function WorkerApplicationsPage() {
  return (
    <MobilePageFrame title="我的报名" subtitle="查看报名状态与打卡">
      <div className="tab-row">
        <button className="tab active">进行中</button>
        <button className="tab">已完成</button>
        <button className="tab">已取消</button>
      </div>
      <div className="mobile-card">
        <div>
          <h4>超市促销员</h4>
          <p className="price">¥50/小时</p>
          <Tag label="已录用" tone="primary" />
        </div>
        <button className="primary-button">上岗打卡</button>
      </div>
      <div className="mobile-card">
        <div>
          <h4>传单派发</h4>
          <p className="price">¥80/天</p>
          <Tag label="工作中" tone="warning" />
        </div>
        <button className="primary-button">下岗打卡</button>
      </div>
      <div className="mobile-card">
        <div>
          <h4>快递分拣</h4>
          <p className="price">¥60/天</p>
          <Tag label="待确认" tone="warning" />
        </div>
        <button className="ghost-button" disabled>
          等待确认
        </button>
      </div>
    </MobilePageFrame>
  );
}
