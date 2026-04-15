import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonialsData = [
    {
      author: "Edward Alexander",
      rating: 4.9,
      date: "29 Aug, 2017",
      quote: "Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Diana Johnston",
      rating: 4.9,
      date: "29 Aug, 2017",
      quote: "At LifeDent, I finally found a clinic that treats patients with dignity and extreme professionalism. The technology they use is state of the art, and the results of my root canal were flawless. Truly a game changer.",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Lauren Contreras",
      rating: 4.9,
      date: "29 Aug, 2017",
      quote: "I was terrified of dentists for years, but the team here made me feel completely safe. From the initial consultation to the final whitening treatment, everything was handled with such gentle care. I highly recommend them!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const rotateTestimonials = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-modern site-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title-modern">Customer Reviews</h2>
        <p className="section-desc-universal" style={{ marginBottom: '2rem', maxWidth: '600px' }}>
          Discover why patients trust us with their smiles. Our commitment to comfort, 
          technology, and personalized care ensures every visit is an exceptional experience.
        </p>

        <div className="testimonials-main-layout">
          {/* Left Side: Curved Avatar Selector */}
          <div className="testimonials-selector-area">
            <svg className="curved-line-svg" viewBox="0 0 100 300">
              <path 
                d="M 100 0 Q 0 150 100 300" 
                fill="none" 
                stroke="#e0e0e0" 
                strokeWidth="1"
              />
            </svg>

            <div className="avatars-ring">
              {testimonialsData.map((t, idx) => {
                const isActive = idx === activeIndex;
                const positionClass = idx === 0 ? 'top' : idx === 1 ? 'center' : 'bottom';
                
                return (
                  <div 
                    key={idx} 
                    className={`avatar-item ${positionClass} ${isActive ? 'active' : ''}`}
                    onClick={() => rotateTestimonials(idx)}
                  >
                    <div className="avatar-img-wrapper">
                      <img src={t.img} alt={t.author} className="avatar-img-round" />
                    </div>
                    <div className="avatar-info">
                      <h4 className="avatar-name">{t.author}</h4>
                      <div className="avatar-meta">
                        <Star size={14} fill="#22c55e" stroke="none" />
                        <span>{t.rating} on {t.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Main Quote Area */}
          <div className="testimonial-quote-area">
             <div className="quote-mark">“</div>
             <div className="quote-text-container">
                <p className="main-quote-paragraph">
                  <span className="first-letter-fancy">{testimonialsData[activeIndex].quote.charAt(0)}</span>
                  {testimonialsData[activeIndex].quote.slice(1)}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
