import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Testimonials = () => {
  const testimonialsData = [
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
    },
    {
      author: "Sarah Jenkins",
      title: "Incredible team support",
      desc: "\"They really take the time to explain\nevery step of the procedure. It's the\nmost comfortable I've ever felt\nat any dental clinic.\"",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Emily Davis",
      title: "Painless and quick",
      desc: "\"I used to dread going to the dentist,\nbut the team here changed my mind.\nEverything was quick, painless, and\nhighly professional.\"",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Michael Chen",
      title: "Highly recommend",
      desc: "\"The scheduling is super flexible\nand they always fit me in when\nI have an emergency. State of the art\nfacility and great staff.\"",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [testOffset, setTestOffset] = useState(0);

  const nextTestimonial = () => {
    if (testOffset < testimonialsData.length - 3) {
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
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-desc">Team carefully evaluates your results to provide actionable<br />insights for improving your health & lifespan.</p>
        </div>
        <div className="testimonials-nav">
          <button className="nav-btn nav-btn-left" onClick={prevTestimonial} disabled={testOffset === 0} style={{ opacity: testOffset === 0 ? 0.3 : 1 }}>
            <ArrowLeft size={20} className="nav-icon arrow-left" />
          </button>
          <button className="nav-btn nav-btn-right" onClick={nextTestimonial} disabled={testOffset >= testimonialsData.length - 3} style={{ opacity: testOffset >= testimonialsData.length - 3 ? 0.3 : 1 }}>
            <ArrowRight size={20} className="nav-icon arrow-right" />
          </button>
        </div>
      </div>

      <div className="testimonials-carousel-container">
        <div
          className="testimonials-grid"
          style={{ transform: `translateX(calc(-${testOffset * (100 / 3)}% - ${testOffset * (2.5 / 3)}rem))` }}
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
                <div className="testimonial-stars">
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
