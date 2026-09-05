import React, { useState } from "react";
import { faqList } from "../data/festivalData";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" style={{ background: "rgba(10, 6, 9, 0.5)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">06 // Frequently Asked Questions</div>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-desc">
            Everything you need to know about team eligibility, accommodation facilities, registration rules, and match logistics.
          </p>
        </div>

        <div className="faq-list">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={22} />
                </button>
                {isOpen && <div className="faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
