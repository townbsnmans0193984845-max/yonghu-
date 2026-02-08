export default function RecruiterHomePage() {
  return (
    <div className="mobile-page">
      <header className="mobile-header">
        <span className="mobile-title">我发布的岗位</span>
        <span className="icon-dot">＋</span>
      </header>
      <div className="mobile-card">
        <div>
          <h4>超市促销员</h4>
          <p className="price">¥50/小时 · 北京朝阳</p>
          <p className="muted">状态：招聘中 · 👁 156 · 📝 3</p>
        </div>
        <div className="button-row">
          <button className="ghost-button">管理报名</button>
          <button className="ghost-button">编辑</button>
        </div>
      </div>
      <div className="mobile-card">
        <div>
          <h4>传单派发</h4>
          <p className="price">¥80/天 · 北京海淀</p>
          <p className="muted">状态：已关闭 · 👁 89 · 📝 2</p>
        </div>
        <div className="button-row">
          <button className="ghost-button">查看</button>
          <button className="ghost-button">重新发布</button>
        </div>
      </div>
      <footer className="mobile-tabs">
        <span className="active">首页</span>
        <span>发布</span>
        <span>我的</span>
      </footer>
    </div>
  );
}
