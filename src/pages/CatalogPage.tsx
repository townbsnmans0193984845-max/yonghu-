import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Tag from "../components/Tag";
import { categoryOrder, pageCatalog } from "../data/pages";

const typeToneMap: Record<string, "primary" | "success" | "warning" | "neutral"> = {
  H5: "primary",
  Admin: "warning"
};

export default function CatalogPage() {
  const h5Count = pageCatalog.filter((page) => page.type === "H5").length;
  const adminCount = pageCatalog.filter((page) => page.type === "Admin").length;

  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="hero-label">基于技术文档生成</p>
          <h1>页面清单与展示重点总览</h1>
          <p>
            该页面将“页面清单与展示重点-Codex对接”的内容整理为可跳转的清单，
            便于快速浏览每个页面的核心功能与布局重点。
          </p>
        </div>
        <div className="hero-card">
          <h3>页面数量</h3>
          <div className="hero-metrics">
            <div>
              <p>H5</p>
              <strong>{h5Count}</strong>
            </div>
            <div>
              <p>管理后台</p>
              <strong>{adminCount}</strong>
            </div>
          </div>
          <p className="hero-note">包含登录、兼职者、招聘方与后台模块。</p>
        </div>
      </section>

      {categoryOrder.map((category) => {
        const entries = pageCatalog.filter((page) => page.category === category);
        return (
          <section key={category} className="catalog-section">
            <SectionHeader title={category} description={`共 ${entries.length} 个页面`} />
            <div className="card-grid">
              {entries.map((page) => (
                <article key={page.route} className="catalog-card">
                  <div className="catalog-card__header">
                    <h3>{page.name}</h3>
                    <Tag label={page.type} tone={typeToneMap[page.type]} />
                  </div>
                  <p className="route">路由：{page.route}</p>
                  <ul>
                    {page.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="ghost-link" to={page.route}>
                    查看参考界面 →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
