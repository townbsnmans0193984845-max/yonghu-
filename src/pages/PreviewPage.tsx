import DeviceFrame from "../components/DeviceFrame";
import Tag from "../components/Tag";

export default function PreviewPage() {
  return (
    <div className="page">
      <section className="preview-grid">
        <DeviceFrame
          title="H5 移动端参考"
          subtitle="登录 + 岗位列表 + 报名入口"
          variant="mobile"
        >
          <div className="mobile-screen">
            <header className="mobile-header">
              <span className="logo-pill">职兼兼</span>
              <span className="mobile-title">岗位列表</span>
              <span className="icon-dot">🔍</span>
            </header>
            <div className="mobile-filter">
              <span>北京</span>
              <span className="ghost-pill">筛选</span>
            </div>
            <div className="mobile-card">
              <div>
                <h4>超市促销员</h4>
                <p className="price">¥50/小时</p>
                <p className="muted">北京朝阳 · XX超市 ⭐4.8</p>
              </div>
              <button className="primary-button">立即报名</button>
            </div>
            <div className="mobile-card">
              <div>
                <h4>传单派发</h4>
                <p className="price">¥80/天</p>
                <p className="muted">北京海淀 · XX公司 ⭐4.5</p>
              </div>
              <button className="primary-button">立即报名</button>
            </div>
            <footer className="mobile-tabs">
              <span className="active">首页</span>
              <span>报名</span>
              <span>我的</span>
            </footer>
          </div>
        </DeviceFrame>

        <DeviceFrame title="H5 登录页参考" subtitle="简洁表单 + 验证码" variant="mobile">
          <div className="mobile-screen">
            <div className="login-body">
              <span className="logo-pill">职兼兼</span>
              <h3>手机号快速登录</h3>
              <input placeholder="📱 请输入手机号" />
              <div className="input-group">
                <input placeholder="🔒 验证码" />
                <button className="ghost-button">获取</button>
              </div>
              <button className="primary-button full">登录</button>
              <p className="muted">首次登录？立即注册</p>
            </div>
          </div>
        </DeviceFrame>

        <DeviceFrame
          title="管理后台参考"
          subtitle="数据看板 + 指标卡 + 最近用户"
          variant="admin"
        >
          <div className="admin-screen">
            <header className="admin-header">
              <h4>数据看板</h4>
              <span className="muted">欢迎，超级管理员</span>
            </header>
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
                <h5>近7天注册趋势</h5>
                <div className="trend">▁▃▄▅▆▇█</div>
              </div>
              <div className="panel">
                <h5>用户角色分布</h5>
                <div className="chart">
                  <Tag label="兼职者 60%" tone="primary" />
                  <Tag label="招聘方 38%" tone="warning" />
                </div>
              </div>
            </div>
            <div className="panel">
              <h5>最近注册用户</h5>
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
          </div>
        </DeviceFrame>
      </section>
    </div>
  );
}
