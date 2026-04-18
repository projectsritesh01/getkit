// Kits.jsx

import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiCamera,
  FiTrendingUp,
  FiZap
} from "react-icons/fi";

import "../styles/kits.css";

const categories = [
  {
    slug: "business",
    title: "Business",
    icon: <FiBriefcase />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    desc: "Launch systems, sales assets and growth frameworks for founders and brands.",
    items: [
      "Business Launch Kit",
      "Sales Funnel Templates",
      "Client Acquisition Pack",
      "Brand Growth System"
    ]
  },
  {
    slug: "creators",
    title: "Creators",
    icon: <FiCamera />,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    desc: "Monetization tools and audience-building systems for creators.",
    items: [
      "Content Planner Kit",
      "Instagram Growth Pack",
      "Course Launch Blueprint",
      "Creator Revenue Stack"
    ]
  },
  {
    slug: "career",
    title: "Career",
    icon: <FiTrendingUp />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    desc: "High-performance tools for professionals seeking faster growth.",
    items: [
      "Resume Upgrade Kit",
      "Interview Master Pack",
      "LinkedIn Authority Bundle",
      "Job Switch System"
    ]
  },
  {
    slug: "productivity",
    title: "Productivity",
    icon: <FiZap />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    desc: "Execution systems to help you focus, organize and scale output.",
    items: [
      "Deep Work Planner",
      "Weekly Planning Kit",
      "Second Brain Setup",
      "Goal Execution System"
    ]
  }
];

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