import { useState } from "react";
import './HomeFAQs.css'

function FAQSection() {
  const faqs = [
    {
      q: "What is MyVidya?",
      a: "MyVidya is a cloud-based school management system that simplifies attendance, communication, fee tracking, and daily school operations."
    },
    {
      q: "Can teachers, parents, and students access it?",
      a: "Yes. MyVidya provides separate dashboards and permissions for Teachers, Parents, Students, and Administration staff."
    },
    {
      q: "Do we need any special setup or servers?",
      a: "No. MyVidya runs fully online. Any computer or smartphone with an internet connection can access the system."
    },
    {
      q: "Is my data safe?",
      a: "Absolutely. We use secure cloud hosting, encrypted database storage, and regular backups to protect your data."
    },
    {
      q: "Do we need any special setup or servers?",
      a: "No. MyVidya runs fully online. Any computer or smartphone with an internet connection can access the system."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQSection;