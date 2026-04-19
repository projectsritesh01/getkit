// Contact.jsx

import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contactPage">
      <div className="container">

        {/* HEADER */}

        <section className="contactHero">
          <span className="contactTag">Get In Touch</span>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have a question, partnership idea, or need help with your digital
            kit? Reach out and our team will respond quickly.
          </p>
        </section>

        {/* GRID */}

        <section className="contactGrid">

          {/* FORM */}

          <div className="contactCard formCard">
            <h2>Send us a message</h2>

            <form onSubmit={handleSubmit} className="contactForm">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="contactBtn">
                Submit Message
              </button>

            </form>
          </div>

          {/* INFO */}

          <div className="infoWrap">

            <div className="contactCard infoCard">
              <div className="iconBox">✉️</div>
              <div>
                <h3>Email</h3>
                <p>support@getkit.com</p>
              </div>
            </div>

            <div className="contactCard infoCard">
              <div className="iconBox">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 90000 00000</p>
              </div>
            </div>

            <div className="contactCard infoCard">
              <div className="iconBox">📍</div>
              <div>
                <h3>Location</h3>
                <p>India (Remote-first team)</p>
              </div>
            </div>

            <div className="contactCard infoCard">
              <div className="iconBox">⏰</div>
              <div>
                <h3>Working Hours</h3>
                <p>Monday – Saturday</p>
                <p>9:00 AM – 6:00 PM IST</p>
              </div>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="contactCta">
          <div className="contactCard ctaCard">
            <h2>Looking for a custom digital kit?</h2>

            <p>
              Tell us your requirement and we will design a personalized kit
              tailored to your workflow, business, or event.
            </p>

            <button className="contactBtn">
              Request Custom Kit
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}