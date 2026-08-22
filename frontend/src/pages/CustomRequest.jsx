// CustomRequest.jsx

import "../styles/custom.css";
import { useState } from "react";
import customRequestService from "../services/customRequestService";

export default function CustomRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await customRequestService.submitCustomRequest(formData);

      setSuccess(true);

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        type: "",
        description: ""
      });

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="customPage">

      {/* HERO */}

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


      {/* REQUEST SECTION */}

      <section className="requestSection container">

        {/* LEFT SIDE */}

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


        {/* FORM */}

        <form
          className="customForm"
          onSubmit={handleSubmit}
        >

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
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Type
            </option>

            <option value="Template">
              Template
            </option>

            <option value="Product">
              Product
            </option>

            <option value="Kit">
              Kit
            </option>

            <option value="Other">
              Other
            </option>
          </select>


          <textarea
            rows="6"
            name="description"
            placeholder="Describe customization you need..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>


          {/* ERROR MESSAGE */}

          {error && (
            <div className="errorMessage">
              {error}
            </div>
          )}


          {/* SUCCESS MESSAGE */}

          {success && (
            <div className="successMessage">
              Your custom request has been submitted successfully.
              We'll get back to you soon.
            </div>
          )}


          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            className="journeyBtn primaryBtn"
            disabled={loading} 
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>

      </section>

    </div>
  );
}