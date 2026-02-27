import { useEffect, useState } from 'react';

const slides = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentIndex ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Welcome to GetKit
          <span>A Structured Digital Product Marketplace</span>
        </h1>

        <p>
          Curated digital tools, templates, and systems designed to help you
          execute better.
        </p>

        <p className="hero-description">
          GetKit is a platform built for focused builders.
          We curate structured digital products that simplify workflows,
          improve clarity, and help you move with direction.
          No clutter. No noise. Just practical assets you can use immediately.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Products</button>
          <button className="secondary-btn">Browse Categories</button>
        </div>

        <small className="hero-note">
          Currently a curated buying platform. Product creation and selling features coming soon.
        </small>
      </div>
    </section>
  );
}

export default HeroSlider;
