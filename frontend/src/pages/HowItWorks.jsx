import styles from "../styles/HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <div className={styles.howPage}>
    <div className={styles.howContainer}>

      <h1 className={styles.pageTitle}>
        How GetKit Works
      </h1>

      <div className={styles.centerText}>
        <p>
          Access ready-to-use resources. Upgrade when you need depth or customization.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Why GetKit Exists</h2>
        <p>
          Finding reliable templates, tools, and structured resources across different platforms can be time-consuming and inconsistent.
        </p>
        <p>
          GetKit was created to bring essential resources together into structured kits that are practical, usable, and easy to scale.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          GetKit is a structured resource platform designed to simplify access to practical tools across business, career, productivity, education, and creative work.
        </p>
        <p>
          We focus on clarity, modular design, and usability.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Why Choose GetKit</h2>

        
            <strong>Organized, Not Scattered</strong>
            <p>Resources are structured into complete kits.</p>
          
      </section>

      <section className={styles.section}>
        <h2>Our Model</h2>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <strong>1. Access Free Essentials</strong>
            <p>Start with ready-to-use templates and foundational kits.</p>
          </div>

          <div className={styles.card}>
            <strong>2. Upgrade to Structured Bundles</strong>
            <p>Move to comprehensive kits when you need more depth and integration.</p>
          </div>

          <div className={styles.card}>
            <strong>3. Add Personalization</strong>
            <p>Customize or extend your kit with tailored services if required.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <p>
          GetKit is built for individuals and organizations who value structured resources without unnecessary complexity.
        </p>

        <div className={styles.ctaButtons}>
          <a href="/kits" className="btn btn-primary">
            Explore Kits
          </a>

          <a href="/free" className="btn btn-outline">
            Start With Free Resources
          </a>
        </div>
      </section>

    </div>
    </div>
  );
}