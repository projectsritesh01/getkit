// Custom.jsx

import { Link } from "react-router-dom";
import "../styles/custom.css";

export default function Custom() {
  return (
    <div className="customPage">

      {/* HERO */}

      <section className="customHero container">
        <span className="customTag">Premium Customization</span>

        <h1>
          Choose Your
          <span> Custom Path</span>
        </h1>

        <p>
          Edit instantly yourself or send requirements for a premium done-for-you version.
        </p>
      </section>

      {/* TIMELINE STYLE LAYOUT */}

      <section className="customJourney container">

        {/* STEP 1 */}

        <div className="journeyCard leftCard">
          <div className="journeyNumber">01</div>

          <div className="journeyContent">
            <span className="journeyMini">SELF SERVICE</span>
            <h2>Customize Yourself</h2>

            <p>
              Get editable files and personalize the template or product instantly.
            </p>

            <ul>
              <li>Editable Canva / Figma File</li>
              <li>Instant Access</li>
              <li>Unlimited Changes</li>
            </ul>

            <a
              href="https://www.canva.com/"
              target="_blank"
              rel="noreferrer"
              className="journeyBtn primaryBtn"
            >
              Open Editable Link
            </a>
          </div>
        </div>

        {/* CENTER LINE */}

        <div className="journeyLine"></div>

        {/* STEP 2 */}

        <div className="journeyCard rightCard">
          <div className="journeyNumber">02</div>

          <div className="journeyContent">
            <span className="journeyMini">DONE FOR YOU</span>
            <h2>Request Custom Work</h2>

            <p>
              Share your details and receive a professionally customized version.
            </p>

            <ul>
              <li>Branding Changes</li>
              <li>Layout Improvements</li>
              <li>Priority Delivery</li>
            </ul>

            <Link to="/custom/request" className="journeyBtn outlineBtn">
              Submit Requirements
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}