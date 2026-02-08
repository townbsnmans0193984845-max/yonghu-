import AdminPageFrame from "../../components/AdminPageFrame";
import Tag from "../../components/Tag";

export default function AdminDashboardPage() {
  return (
    <AdminPageFrame title="数据看板" subtitle="欢迎，超级管理员">
      <div className="admin-metrics">
        {[
          { label: "总用户", value: "1,234" },
          { label: "总岗位", value: "567" },
          { label: "总报名", value: "8,901" }
        ].map((item) => (
          <div key={item.label} className="metric-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="admin-panels">
        <div className="panel">
          <h4>近7天用户注册趋势</h4>
          <div className="trend">▁▃▄▅▆▇█</div>
        </div>
        <div className="panel">
          <h4>用户角色分布</h4>
          <div className="chart">
            <Tag label="兼职者 60%" tone="primary" />
            <Tag label="招聘方 38%" tone="warning" />
          </div>
        </div>
      </div>
      <div className="panel">
        <h4>最近注册用户</h4>
        <div className="table">
          <div className="row header">
            <span>ID</span>
            <span>手机号</span>
            <span>角色</span>
            <span>注册时间</span>
          </div>
          {[
            { id: "001", phone: "138***1", role: "兼职者", date: "2月5日" },
            { id: "002", phone: "139***2", role: "招聘方", date: "2月5日" }
          ].map((row) => (
            <div key={row.id} className="row">
              <span>{row.id}</span>
              <span>{row.phone}</span>
              <span>{row.role}</span>
              <span>{row.date}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminPageFrame>
  );
}
