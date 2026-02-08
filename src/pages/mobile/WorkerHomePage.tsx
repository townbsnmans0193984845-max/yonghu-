export default function WorkerHomePage() {
  return (
    <div className="mobile-page">
      <header className="mobile-header">
        <span className="icon-dot">☰</span>
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
          <p className="tiny">已报名 3/5</p>
        </div>
        <button className="primary-button">立即报名</button>
      </div>
      <div className="mobile-card">
        <div>
          <h4>传单派发</h4>
          <p className="price">¥80/天</p>
          <p className="muted">北京海淀 · XX公司 ⭐4.5</p>
          <p className="tiny">已报名 1/2</p>
        </div>
        <button className="primary-button">立即报名</button>
      </div>
      <footer className="mobile-tabs">
        <span className="active">首页</span>
        <span>报名</span>
        <span>我的</span>
      </footer>
    </div>
  );
}
