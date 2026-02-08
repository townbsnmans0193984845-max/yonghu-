import MobilePageFrame from "../../components/MobilePageFrame";

export default function RegisterPage() {
  return (
    <MobilePageFrame title="创建新账号" subtitle="选择你的身份后完成注册">
      <div className="form">
        <label>手机号</label>
        <input placeholder="📱 请输入手机号" />
        <label>验证码</label>
        <div className="input-group">
          <input placeholder="🔒 验证码" />
          <button className="ghost-button">获取</button>
        </div>
        <label>选择身份</label>
        <div className="card-choice">
          <button className="choice active">兼职者</button>
          <button className="choice">招聘方</button>
        </div>
        <button className="primary-button full">注册</button>
        <p className="muted">已注册？去登录</p>
      </div>
    </MobilePageFrame>
  );
}
