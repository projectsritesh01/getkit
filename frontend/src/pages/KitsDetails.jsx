// KitDetails.jsx

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/kitsDetails.css";

/* IMPORT YOUR 7 IMAGES FROM src/assets */
import img1 from "../assets/MT 1.jpeg";
import img2 from "../assets/MT 2.jpeg";
import img3 from "../assets/MT 3.jpeg";
import img4 from "../assets/MT 4.jpeg";
import img5 from "../assets/MT 5.jpeg";
import img6 from "../assets/MT 6.jpeg";
import img7 from "../assets/MT 7.jpeg";


const gallery = [img1, img2, img3, img4, img5, img6, img7];

const data = {
  productivity: {
    title: "Productivity Kits",
    desc: "Focus systems and planning assets for better execution."
  }
};

export default function KitsDetails() {
  const { category } = useParams();
  const [activeTab, setActiveTab] = useState("products");

  const item = data[category];

  return (
    <div className="kitDetailsPage">
      <section className="kitDetailsHero container">
        <span className="detailTag">Category Kits</span>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </section>

      <section className="container filterWrap">
        <button
          className={activeTab === "products" ? "filterBtn active" : "filterBtn"}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>

        <button
          className={activeTab === "templates" ? "filterBtn active" : "filterBtn"}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
      </section>

      <section className="detailSection container">
        {activeTab === "products" && (
          <Link to={`/kits/${category}/products`} className="previewCard">
            <img src={img1} alt="Product Preview" />
            <h3>Productivity Planner Bundle</h3>
            <p>Click to view more similar products</p>
          </Link>
        )}

        {activeTab === "templates" && (
          <Link to={`/kits/${category}/templates`} className="previewCard">
            <img src={img2} alt="Template Preview" />
            <h3>Motivational Quote Templates</h3>
            <p>Click to view more similar templates</p>
          </Link>
        )}
      </section>
    </div>
  );
}

