import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/insights.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import blog1 from "../blogs/blog1.md?raw";
import blog2 from "../blogs/blog2.md?raw";
import blog3 from "../blogs/blog3.md?raw";

const articles = [
  {
    title: "What Is a Digital Product Kit",
    slug: "digital-product-kit",
    content: blog1
  },
  {
    title: "Digital Product Funnels",
    slug: "digital-product-funnels",
    content: blog2
  },
  {
    
    title: "The Structured Framework for Building Profitable Digital Products",
    slug: "structured-framework",
    content: blog3
  }
];

export default function Insights() {

  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <div className="insightsPage">

      {/* HERO */}
      <div className="insightsHero container">
        <h1>Insights</h1>
        <p>
          Structured thinking on digital products, launch frameworks,
          and scalable online businesses.
        </p>
      </div>

      {/* FEATURED ARTICLE */}
      <div className="container">
        <div className="featuredArticle">

          <div className="featuredContent">
            <span className="featuredBadge">Featured Guide</span>

            <h2>{featured.title}</h2>

            <div className="featuredPreview">
              <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
>
  {featured.content.slice(0, 700)}
</ReactMarkdown>
            </div>

            <Link
              to={`/insights/${featured.slug}`}
              className="featuredButton"
            >
              Read Full Guide →
            </Link>
          </div>

        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className="container articlesGrid">

        {others.map((article, index) => (
          <article key={index} className="articleCard">

            <h3>{article.title}</h3>

            <div className="articlePreview">
              <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
>
  {article.content.slice(0, 450)}
</ReactMarkdown>
            </div>

            <Link
              to={`/insights/${article.slug}`}
              className="readMore"
            >
              Continue Reading →
            </Link>

          </article>
        ))}

      </div>

    </div>
  );
}