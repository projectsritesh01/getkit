import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroWrapper}`}>

          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              Digital Execution Systems
            </div>

            <h1 className={styles.heroTitle}>
              Structured Digital Kits.
              <br />
              <span className={styles.heroHighlight}>
                Clear Outcomes.
              </span>
            </h1>

            <p className={styles.heroSubtext}>
              Practical templates, curated systems, and ready-to-use toolkits
              for business, career, productivity, and creators.
            </p>

            <div className={styles.heroButtons}>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/kits")}
              >
                Explore Free Kit
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/how-it-works")}
              >
                See How It Works
              </button>
            </div>
          </div>

          <div className={styles.heroRight}>
  <div className={styles.heroCardPreview}>

    <div className={styles.miniCard}>
      <span>Active Kits</span>
      <h3>12+</h3>
      <p>Business • Career • Creator</p>
    </div>

    <div className={styles.miniCard}>
      <span>Availability</span>
      <h3>24/7</h3>
      <p>Access</p>
    </div>

    <div className={styles.miniCard}>
      <span>Execution Rate</span>
      <h3>42%</h3>
      <p>Faster Productivity</p>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You Get</h2>
          <p className="section-subtitle">
            Each kit is built for clarity, structure, and practical execution.
          </p>

          <div className={styles.featuresGrid}>
            <div className="card">
              <div className={styles.cardIcon}>📦</div>
              <h3>Structured Templates</h3>
              <p>
                Professionally designed frameworks ready to use immediately.
              </p>
            </div>

            <div className="card">
              <div className={styles.cardIcon}>🧭</div>
              <h3>Clear Execution Paths</h3>
              <p>
                Step-by-step guidance so you know exactly what to do next.
              </p>
            </div>

            <div className="card">
              <div className={styles.cardIcon}>⚙️</div>
              <h3>Action-Oriented Systems</h3>
              <p>
                Built for implementation, not theory or information overload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className={`section ${styles.homeHowItWorks}`}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple process. Clear structure. Practical results.
          </p>

          <div className={styles.stepsGrid}>
            <div className="card">
              <div className={styles.stepNumber}>01</div>
              <h3>Choose Your Kit</h3>
              <p>Select a structured toolkit aligned with your goal.</p>
            </div>

            <div className="card">
              <div className={styles.stepNumber}>02</div>
              <h3>Apply the Framework</h3>
              <p>Follow the guided system and complete each step.</p>
            </div>

            <div className="card">
              <div className={styles.stepNumber}>03</div>
              <h3>Achieve Clear Outcomes</h3>
              <p>
                Move forward with clarity, structure, and execution confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>
            Start With Structure Today
          </h2>

          <p className={styles.ctaText}>
            Stop consuming information. Start implementing structured systems.
          </p>

          <div className={styles.ctaButtons}>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => navigate("/kits")}
            >
              Get Started Now
            </button>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;