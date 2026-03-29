import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Testimonials = () => {
  const testimonialsData = [
    {
      author: "Charles Kofi",
      title: "Best dental experience",
      desc: "\"Absolutely the best dental clinic in\nAccra. The staff are so friendly, and\nthe facilities are top-notch.\nI felt completely at ease.\"",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "David Thomson",
      title: "Gentle and thorough",
      desc: "\"The hygienist was incredibly gentle\nand explained everything she was doing.\nMy teeth have never felt cleaner.\nHighly recommend this clinic!\"",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Robert Smith",
      title: "Saved my smile",
      desc: "\"I came in with a severe toothache\nand they took care of me immediately.\nThe root canal was completely painless\nand the staff was amazing.\"",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Amanda Wright",
      title: "Great for kids!",
      desc: "\"My children used to be terrified\nof the dentist until we found LifePath.\nThe pediatric team is so patient\nand makes every visit fun.\"",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [testOffset, setTestOffset] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 3);

  React.useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth <= 768 ? 1 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (testOffset > testimonialsData.length - cardsToShow) {
      setTestOffset(Math.max(0, testimonialsData.length - cardsToShow));
    }
  }, [cardsToShow, testOffset, testimonialsData.length]);

  const nextTestimonial = () => {
    if (testOffset < testimonialsData.length - cardsToShow) {
      setTestOffset(prev => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (testOffset > 0) {
      setTestOffset(prev => prev - 1);
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-title-container">
          <h2 className="testimonials-title">What Our Patients Say</h2>
          <p className="testimonials-desc" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⭐ 5.0 Rating on Google Reviews.</span>
            Read our verified patient experiences below.
          </p>
        </div>
        <div className="testimonials-nav">
          <button className="nav-btn nav-btn-left" onClick={prevTestimonial} disabled={testOffset === 0} style={{ opacity: testOffset === 0 ? 0.3 : 1 }}>
            <ArrowLeft size={20} className="nav-icon arrow-left" />
          </button>
          <button className="nav-btn nav-btn-right" onClick={nextTestimonial} disabled={testOffset >= testimonialsData.length - cardsToShow} style={{ opacity: testOffset >= testimonialsData.length - cardsToShow ? 0.3 : 1 }}>
            <ArrowRight size={20} className="nav-icon arrow-right" />
          </button>
        </div>
      </div>

      <div className="testimonials-carousel-container">
        <div
          className="testimonials-grid"
          style={{ transform: `translateX(calc(-${testOffset * (100 / cardsToShow)}% - ${testOffset * (2.5 / cardsToShow)}rem))` }}
        >
          {testimonialsData.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={t.img} alt={t.author} className="testimonial-avatar" />
              <h3 className="testimonial-card-title">{t.title}</h3>
              <p className="testimonial-card-desc">
                {t.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-author">{t.author}</span>
                <div className="testimonial-stars" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px" style={{ marginRight: '4px' }}>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
