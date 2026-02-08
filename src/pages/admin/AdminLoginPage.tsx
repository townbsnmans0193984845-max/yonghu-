export default function AdminLoginPage() {
  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <h2>职兼兼管理后台</h2>
        <input placeholder="用户名/邮箱" />
        <input placeholder="密码" type="password" />
        <label className="checkbox">
          <input type="checkbox" /> 记住密码
        </label>
        <button className="primary-button full">登录</button>
      </div>
    </div>
  );
}
