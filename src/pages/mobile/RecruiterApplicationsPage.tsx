import MobilePageFrame from "../../components/MobilePageFrame";

const candidates = [
  { name: "张三", score: 98, finished: 15, date: "2月5日" },
  { name: "李四", score: 90, finished: 8, date: "2月5日" }
];

export default function RecruiterApplicationsPage() {
  return (
    <MobilePageFrame title="报名管理" subtitle="岗位：超市促销员">
      <div className="detail-info">
        <span>已报名：3/5 人</span>
      </div>
      <div className="tab-row">
        <button className="tab active">全部</button>
        <button className="tab">待审核</button>
        <button className="tab">已录用</button>
      </div>
      {candidates.map((candidate) => (
        <div key={candidate.name} className="mobile-card">
          <div>
            <h4>👤 {candidate.name}</h4>
            <p className="muted">⭐ {candidate.score} · 已完成 {candidate.finished} 单</p>
            <p className="tiny">报名时间：{candidate.date}</p>
          </div>
          <div className="button-row">
            <button className="primary-button">录用</button>
            <button className="ghost-button">拒绝</button>
          </div>
        </div>
      ))}
    </MobilePageFrame>
  );
}
