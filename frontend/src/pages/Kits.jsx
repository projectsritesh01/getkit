// Kits.jsx

import { Link } from "react-router-dom";


import "../styles/kits.css";
import categories from "../data/categories.jsx";


export default function Kits() {
  return (
    <div className="kitsPage">
      <section className="kitsHero container">
        <span className="kitsTag">Digital Product Library</span>
        <h1>Ready-Made Kits for Every Goal</h1>
        <p>
          Premium resources designed for businesses, creators,
          professionals and ambitious individuals.
        </p>
      </section>

      <section className="kitsGrid container">
        {categories.map((item, index) => (
          <div className="kitCard" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="kitImage"
            />

            <div className="kitIcon">{item.icon}</div>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <ul>
              {item.items.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <Link to={`/kits/${item.slug}`} className="kitBtn">
              View Solutions →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}