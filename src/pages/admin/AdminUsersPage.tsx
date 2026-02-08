import AdminPageFrame from "../../components/AdminPageFrame";

const rows = [
  { id: "001", phone: "138***1", role: "兼职者", status: "正常" },
  { id: "002", phone: "139***2", role: "招聘方", status: "正常" },
  { id: "003", phone: "137***3", role: "兼职者", status: "封禁" }
];

export default function AdminUsersPage() {
  return (
    <AdminPageFrame title="用户管理" subtitle="搜索与筛选用户"> 
      <div className="filter-row">
        <input placeholder="手机号" />
        <select>
          <option>角色：全部</option>
          <option>兼职者</option>
          <option>招聘方</option>
        </select>
        <select>
          <option>状态：全部</option>
          <option>正常</option>
          <option>封禁</option>
        </select>
        <button className="ghost-button">查询</button>
        <button className="ghost-button">重置</button>
      </div>
      <div className="panel">
        <div className="table">
          <div className="row header">
            <span>ID</span>
            <span>手机号</span>
            <span>角色</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          {rows.map((row) => (
            <div key={row.id} className="row">
              <span>{row.id}</span>
              <span>{row.phone}</span>
              <span>{row.role}</span>
              <span>{row.status}</span>
              <span className="actions">
                <button className="ghost-button">详情</button>
                <button className="ghost-button">
                  {row.status === "封禁" ? "解封" : "封禁"}
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </AdminPageFrame>
  );
}
