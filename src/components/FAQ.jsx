import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer: "Your initial visit includes a comprehensive exam, full mouth x-rays, a periodontal screening, and a personalized discussion about your dental health goals and treatment plan."
    },
    {
      question: "How often should I see the dentist for a checkup?",
      answer: "We recommend visiting the dentist every six months for a routine checkup and professional cleaning to maintain optimal oral health and catch potential issues early."
    },
    {
      question: "Do you accept my dental insurance?",
      answer: "We accept most major dental insurance plans. Our team will happily verify your benefits prior to your appointment and assist with filing your claims."
    },
    {
      question: "What do I do if I have a dental emergency?",
      answer: "If you experience a dental emergency, please call our office immediately. We offer same-day emergency appointments to relieve pain and address urgent dental issues."
    },
    {
      question: "Do you offer teeth whitening services?",
      answer: "Yes, we offer both in-office professional whitening treatments for immediate results and take-home custom whitening kits for your convenience."
    }
  ];

  return (
    <section className="faq-section site-section">
      <div className="faq-container">
        <div className="faq-header-container">
          <h2 className="section-title-universal">Frequently Asked Questions</h2>
          <p className="section-desc-universal">Our friendly team would love to answer your questions.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon-wrapper">
                    {isOpen ? <MinusCircle size={24} strokeWidth={1.5} /> : <PlusCircle size={24} strokeWidth={1.5} />}
                  </div>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
