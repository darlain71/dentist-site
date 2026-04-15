import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const AnimatedCounter = ({ end, duration, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function for smoother finish
        const easeOutQuad = 1 - (1 - percentage) * (1 - percentage);
        setCount(Math.floor(end * easeOutQuad));
        
        if (progress < duration * 1000) {
          window.requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(animate);
    }
  }, [end, duration, inView]);

  return <span>{count}</span>;
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="new-about-container">
      <Helmet>
        <title>About Us | LifeDent</title>
        <meta name="description" content="Meet Dr. Kofi Ansah and Dr. Kojo Nti at LifeDent. We provide top-tier dental care in East Legon and Oyarifa." />
      </Helmet>
      {/* Top Header Section */}
      <section className="new-about-header">
        <h1 className="new-about-title">About Us</h1>
        <p className="new-about-desc">
          We are committed to creating a safe and comfortable environment
          where you can receive top-tier dental care, achieve a beautiful smile,
          and maintain lasting oral health.
        </p>
      </section>

      {/* Main Image Section */}
      <section className="new-about-image-section">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Dental Clinic Team" 
          className="new-about-hero-img" 
        />
      </section>

      {/* Stats Section */}
      <section className="new-about-stats" ref={ref}>
        <div className="new-stat-item">
          <h3 className="new-stat-number">{inView ? <AnimatedCounter end={10} duration={2.5} inView={inView} /> : '0'}k+</h3>
          <p className="new-stat-text">Happy patients globally</p>
        </div>
        <div className="new-stat-item">
          <h3 className="new-stat-number">{inView ? <AnimatedCounter end={15} duration={2.5} inView={inView} /> : '0'}+</h3>
          <p className="new-stat-text">Expert specialists</p>
        </div>
        <div className="new-stat-item">
          <h3 className="new-stat-number">{inView ? <AnimatedCounter end={99} duration={2.5} inView={inView} /> : '0'}%</h3>
          <p className="new-stat-text">Satisfaction rate</p>
        </div>
        <div className="new-stat-item">
          <h3 className="new-stat-number">{inView ? <AnimatedCounter end={12} duration={2.5} inView={inView} /> : '0'}+</h3>
          <p className="new-stat-text">Years of experience</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="new-about-mission-section">
        <div className="new-mission-left">
          <h2 className="new-mission-heading">Empowering Your<br/>Best Smile</h2>
        </div>
        <div className="new-mission-right">
          <div className="new-mission-block">
            <h4 className="new-mission-label">OUR VISION</h4>
            <p className="new-mission-text">
              To be the leading dental clinic, providing accessible, compassionate, and advanced care for oral health and well-being worldwide.
            </p>
          </div>
          <div className="new-mission-divider"></div>
          <div className="new-mission-block">
            <h4 className="new-mission-label">OUR MISSION</h4>
            <p className="new-mission-text">
              To support individuals in achieving confident smiles through tailored treatments and education, ensuring everyone has access to professional dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Services and Specialists Sections */}
      <section className="works-section" style={{padding: '6rem 0'}}>
        <div className="works-grid">
          <div className="works-col-left">
             <h2 className="works-title">Dental Services</h2>
             <p className="works-desc">Comprehensive care for all your dental needs.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <div className="work-card">
                <img src="/works_img1.png" alt="Teeth Straightening" className="work-card-img" />
                <h3 className="work-card-title">Teeth Straightening</h3>
                <p className="work-card-desc">Improve your smile with aligners and braces.</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Dental Implant" className="work-card-img" />
                <h3 className="work-card-title">Dental Implant</h3>
                <p className="work-card-desc">Permanent solutions for missing teeth.</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Teeth Whitening" className="work-card-img" />
                <h3 className="work-card-title">Teeth Whitening</h3>
                <p className="work-card-desc">Professional and safe whitening services.</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Root Canal" className="work-card-img" />
                <h3 className="work-card-title">Root Canal</h3>
                <p className="work-card-desc">Painless procedures to save your infected tooth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="works-grid" style={{marginTop: '6rem'}}>
          <div className="works-col-left">
             <h2 className="works-title">Meet Our Team</h2>
             <p className="works-desc">Experienced professionals dedicated to your smile.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Dr. Kofi Ansah" className="work-card-img" />
                <h3 className="work-card-title">Dr. Kofi Ansah</h3>
                <p className="work-card-desc" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Lead Dentist & Implantologist</p>
                <p className="work-card-desc" style={{ fontSize: '0.85rem' }}>BDS, MSc Implantology. Over 15 years of experience in restorative and cosmetic dentistry.</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" alt="Dr. Kojo Nti" className="work-card-img" />
                <h3 className="work-card-title">Dr. Kojo Nti</h3>
                <p className="work-card-desc" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Orthodontist specialist</p>
                <p className="work-card-desc" style={{ fontSize: '0.85rem' }}>BDS, MFDS. Specializes in modern alignment techniques and family dental care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default About;
