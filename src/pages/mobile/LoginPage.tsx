export default function LoginPage() {
  return (
    <div className="mobile-page login-page">
      <div className="login-body">
        <span className="logo-pill">职兼兼</span>
        <h2>手机号快速登录</h2>
        <input placeholder="📱 请输入手机号" />
        <div className="input-group">
          <input placeholder="🔒 验证码" />
          <button className="ghost-button">获取</button>
        </div>
        <button className="primary-button full">登录</button>
        <p className="muted">首次登录？立即注册</p>
      </div>
    </div>
  );
}
