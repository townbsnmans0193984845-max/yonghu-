import AdminPageFrame from "../../components/AdminPageFrame";

const jobs = [
  { id: "001", title: "超市促销", company: "XX超市", status: "招募中" },
  { id: "002", title: "传单派发", company: "XX公司", status: "已关闭" }
];

export default function AdminJobsPage() {
  return (
    <AdminPageFrame title="岗位管理" subtitle="岗位列表与上下架"> 
      <div className="filter-row">
        <input placeholder="岗位标题" />
        <select>
          <option>状态：全部</option>
          <option>招募中</option>
          <option>已关闭</option>
        </select>
        <button className="ghost-button">搜索</button>
      </div>
      <div className="panel">
        <div className="table">
          <div className="row header">
            <span>ID</span>
            <span>标题</span>
            <span>招聘方</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          {jobs.map((job) => (
            <div key={job.id} className="row">
              <span>{job.id}</span>
              <span>{job.title}</span>
              <span>{job.company}</span>
              <span>{job.status}</span>
              <span className="actions">
                <button className="ghost-button">详情</button>
                <button className="ghost-button">
                  {job.status === "已关闭" ? "重新上架" : "下架"}
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </AdminPageFrame>
  );
}
