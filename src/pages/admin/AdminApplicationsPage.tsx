import AdminPageFrame from "../../components/AdminPageFrame";
import Tag from "../../components/Tag";

const applications = [
  { id: "001", job: "超市", worker: "张三", status: "已录用", date: "2月5日" },
  { id: "002", job: "传单", worker: "李四", status: "工作中", date: "2月5日" }
];

export default function AdminApplicationsPage() {
  return (
    <AdminPageFrame title="报名监控" subtitle="状态筛选与异常提醒"> 
      <div className="tab-row">
        <button className="tab active">全部</button>
        <button className="tab">待审核</button>
        <button className="tab">工作中</button>
        <button className="tab">已完工</button>
      </div>
      <div className="panel">
        <div className="table">
          <div className="row header">
            <span>ID</span>
            <span>岗位</span>
            <span>兼职者</span>
            <span>状态</span>
            <span>时间</span>
          </div>
          {applications.map((item) => (
            <div key={item.id} className="row">
              <span>{item.id}</span>
              <span>{item.job}</span>
              <span>{item.worker}</span>
              <span>
                <Tag label={item.status} tone="warning" />
              </span>
              <span>{item.date}</span>
            </div>
          ))}
        </div>
        <div className="alert">超过1小时未审核：2 条</div>
      </div>
    </AdminPageFrame>
  );
}
