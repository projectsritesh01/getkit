import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/insights.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import blog1 from "../blogs/blog1.md?raw";
import blog2 from "../blogs/blog2.md?raw";
import blog3 from "../blogs/blog3.md?raw";

const blogMap = {
  "digital-product-kit": blog1,
  "digital-product-funnels": blog2,
  "structured-framework": blog3
  
};

export default function ArticlePage() {

  const { slug } = useParams();
  const content = blogMap[slug];

  if (!content) return <div className="container">Article not found</div>;

  return (
    <div className="articleContainer container">

      <article className="articleContent">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
  {content}
</ReactMarkdown>
      </article>

    </div>
  );
}