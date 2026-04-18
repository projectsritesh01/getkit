import { Link } from "react-router-dom";
import {
  FiUsers,
  FiMessageSquare,
  FiTrendingUp,
  FiZap,
  FiArrowRight
} from "react-icons/fi";

import "../styles/community.css";

const benefits = [
  {
    icon: <FiUsers />,
    title: "Network with Builders",
    text: "Connect with founders, creators, freelancers and growth-focused people."
  },
  {
    icon: <FiMessageSquare />,
    title: "Learn Together",
    text: "Share ideas, ask questions and gain practical insights from others."
  },
  {
    icon: <FiTrendingUp />,
    title: "Grow Faster",
    text: "Access strategies, resources and opportunities that help you move faster."
  },
  {
    icon: <FiZap />,
    title: "Stay Motivated",
    text: "Be surrounded by people actively building and improving."
  }
];

export default function Community() {
  return (
    <div className="communityPage">

      {/* Hero */}
      <section className="communityHero container">
        <span className="communityTag">Community</span>

        <h1>Build With People Going Forward</h1>

        <p>
          Join a focused ecosystem of ambitious individuals sharing growth,
          systems, opportunities and execution.
        </p>

        <div className="heroButtons">
          <a href="#join" className="primaryBtn">
            Join Community
          </a>

          <Link to="/kits" className="secondaryBtn">
            Explore Kits
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="communityGrid container">
        {benefits.map((item, index) => (
          <div className="communityCard" key={index}>
            <div className="communityIcon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="joinBox container" id="join">
        <h2>Ready to Join the Circle?</h2>

        <p>
          Surround yourself with people who are building seriously.
        </p>

        <a href="#" className="joinBtn">
          Enter Community <FiArrowRight />
        </a>
      </section>

    </div>
  );
}