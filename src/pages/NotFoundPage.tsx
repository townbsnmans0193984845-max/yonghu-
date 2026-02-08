import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>页面未找到，请返回页面清单。</p>
      <Link className="primary-button" to="/catalog">
        返回页面清单
      </Link>
    </div>
  );
}
