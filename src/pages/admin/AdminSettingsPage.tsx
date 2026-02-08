import AdminPageFrame from "../../components/AdminPageFrame";

export default function AdminSettingsPage() {
  return (
    <AdminPageFrame title="系统设置" subtitle="业务与风控配置"> 
      <div className="panel">
        <h4>业务配置</h4>
        <div className="form-grid">
          <label>最低押金比例</label>
          <input placeholder="20%" />
          <label>自动确认时长</label>
          <input placeholder="24 小时" />
          <label>违约扣罚比例</label>
          <input placeholder="100%" />
        </div>
      </div>
      <div className="panel">
        <h4>风控配置</h4>
        <div className="form-grid">
          <label>单日提现上限</label>
          <input placeholder="500 元" />
          <label>新用户报名上限</label>
          <input placeholder="10 个" />
          <label>同 IP 注册账号数</label>
          <input placeholder="3 个" />
        </div>
      </div>
      <div className="panel">
        <h4>消息模板</h4>
        <div className="form-grid">
          <label>短信模板</label>
          <input placeholder="配置..." />
          <label>站内信模板</label>
          <input placeholder="配置..." />
        </div>
      </div>
      <button className="primary-button">保存设置</button>
    </AdminPageFrame>
  );
}
