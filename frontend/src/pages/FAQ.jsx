import { useState } from "react";
import "../styles/faq.css";

const faqs = [
  {
    question: "What exactly is a GetKit?",
    answer:
      "A GetKit is a structured digital toolkit built around one clearly defined outcome. Each kit includes templates, step-by-step execution guidance, and curated resources to help you move from intention to completion.",
  },
  {
    question: "How is GetKit different from online courses?",
    answer:
      "Courses teach concepts. GetKit is built for execution. Instead of hours of video content, you get structured systems designed to be applied immediately.",
  },
  {
    question: "Are the kits beginner-friendly?",
    answer:
      "Yes. Each kit is designed with clear sequencing and minimal assumptions. If prior knowledge is required, it is stated clearly before purchase.",
  },
  {
    question: "Who are GetKits built for?",
    answer:
      "Professionals, founders, creators, and students who want structured systems instead of scattered resources.",
  },
  {
    question: "What kind of outcomes can I expect?",
    answer:
      "Each kit defines a specific result before you start. Examples include launching a project, building a system, or organizing a workflow.",
  },
  {
    question: "How long does it take to complete a kit?",
    answer:
      "Completion time varies by kit. Most are designed to be actionable within days or weeks, not months.",
  },
  {
    question: "Are the templates customizable?",
    answer:
      "Yes. All templates are editable and designed to be adapted to your specific context.",
  },
  {
    question: "Do I need special software to use GetKit?",
    answer:
      "Most kits rely on widely accessible tools such as Notion, Google Docs, or downloadable formats. Any requirements are clearly stated.",
  },
  {
    question: "Is this just another template bundle?",
    answer:
      "No. Template bundles give assets. GetKit provides structured flow and outcome-based sequencing.",
  },
  {
    question: "Can I use GetKit for commercial purposes?",
    answer:
      "Usage rights vary by kit. Commercial usage permissions are specified within each product.",
  },
  {
    question: "Will new kits be added?",
    answer:
      "Yes. New kits are developed around practical, high-demand outcomes.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "If offered, refund terms are clearly outlined on the checkout page before purchase.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes. Once purchased, you retain access to that specific kit.",
  },
  {
    question: "Can I share a kit with my team?",
    answer:
      "Licensing terms define whether team sharing is permitted. Some kits may include multi-user options.",
  },
  {
    question: "How do I choose the right kit?",
    answer:
      "Start with your current objective. Each kit clearly defines its intended outcome so you can align your choice with your goal.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about GetKit</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}