// CustomRequest.jsx

import "../styles/custom.css";

export default function CustomRequest() {
  return (
    <div className="customPage">

      <section className="customHero container">
        <span className="customTag">Request Form</span>

        <h1>
          Tell Us What
          <span> You Need</span>
        </h1>

        <p>
          Fill the form below and receive a professionally customized version.
        </p>
      </section>

      <section className="requestSection container">

        <div className="requestInfo">
          <h2>What We Can Customize</h2>

          <div className="infoList">
            <div className="infoBox">Text & Quotes</div>
            <div className="infoBox">Brand Colors</div>
            <div className="infoBox">Logos & Identity</div>
            <div className="infoBox">Layouts</div>
            <div className="infoBox">Product Packaging</div>
            <div className="infoBox">Premium Redesign</div>
          </div>
        </div>

        <form className="customForm">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <select>
            <option>Select Type</option>
            <option>Template</option>
            <option>Product</option>
          </select>

          <textarea
            rows="6"
            placeholder="Describe customization you need..."
          ></textarea>

          <button type="submit" className="journeyBtn primaryBtn">
            Submit Request
          </button>
        </form>

      </section>

    </div>
  );
}