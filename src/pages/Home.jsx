import React, { useState } from 'react';
import { Phone, ArrowRight, ArrowLeft, Star, MapPin, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    { id: 1, name: 'Colgate', logo: 'https://logo.clearbit.com/colgate.com' },
    { id: 2, name: 'Oral-B', logo: 'https://logo.clearbit.com/oralb.com' },
    { id: 3, name: 'Sensodyne', logo: 'https://logo.clearbit.com/sensodyne.com' },
    { id: 4, name: 'Philips Sonicare', logo: 'https://logo.clearbit.com/philips.com' },
    { id: 5, name: 'Invisalign', logo: 'https://logo.clearbit.com/invisalign.com' },
    { id: 6, name: 'Straumann', logo: 'https://logo.clearbit.com/straumann.com' },
    { id: 7, name: 'HealthCare', logo: '/partners/healthcare.jpg' }
  ];

  return (
    <>
      <Helmet>
        <title>Dental Signature GH | Best Dentist in East Legon Accra</title>
        <meta name="description" content="Friendly, professional, and affordable dental care in East Legon and Oyarifa, Accra. Book an appointment today!" />
      </Helmet>
      <div className="hero-section" id="home">
        <div className="hero-background"></div>

        <main className="hero-content">
          <h1 className="hero-title">
            <span className="title-row">Your Brightest</span>
            <span className="title-row">Smile Awaits</span>
          </h1>

          <p className="hero-subtext">
            Friendly, professional, and affordable dental care for the whole family.<br />
            Visit our clinics in East Legon and Oyarifa, Accra.
          </p>

          <div className="hero-actions">
            <Link to="/booking" className="hero-btn-black">
              Book Appointment
            </Link>
            <Link to="/services" className="hero-btn-white">
              Services
            </Link>
          </div>
        </main>
      </div>





      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-col-left">
            <img src="/about_left.png" alt="Dental examination" className="about-img-left" />
          </div>

          <div className="about-col-center">
            <h2 className="about-title">A Simple Way to Save<br />on Dental Care</h2>
            <p className="about-desc">
              Our team of skilled and experienced dental professionals strives<br />
              to create comfortable and welcoming environment for each and<br />
              every patient. We offer a wide range of services.
            </p>
            <a href="tel:0535516633" className="about-btn" style={{ textDecoration: 'none' }}>
              <span>Book Appointment</span>
              <ArrowRight className="btn-icon" size={16} />
            </a>
            <div className="about-img-center-wrapper">
              <img src="/about_center.png" alt="Dental procedure close-up" className="about-img-center" />
            </div>
          </div>

          <div className="about-col-right">
            <img src="/about_right.png" alt="Patient smiling" className="about-img-right" />
            <div className="about-stats">
              <h3 className="stats-number">98%</h3>
              <p className="stats-text">Client satisfaction with our service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section" id="gallery">
        <div className="product-container">
          <div className="product-info-left" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="product-heading" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Real Results, Real Smiles
            </h2>
            <p className="product-subtext-left" style={{ color: '#666' }}>
              See the difference our professional dental care makes. From teeth whitening to <br />
              complete smile makeovers, our results speak for themselves.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Teeth Whitening Before and After" className="gallery-img" />
              <div className="gallery-content">
                <h3>Professional Teeth Whitening</h3>
                <p>A brighter, more confident smile in just one session.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Dental Care" className="gallery-img" />
              <div className="gallery-content">
                <h3>Complete Check-ups</h3>
                <p>Comprehensive exams tracking your oral health over time.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Dental Surgery" className="gallery-img" />
              <div className="gallery-content">
                <h3>Advanced Procedures</h3>
                <p>Safe, comfortable, and effective treatments.</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <a href="tel:0535516633" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <span>Book Your Consultation</span>
                <ArrowRight className="btn-icon" size={16} />
              </a>
          </div>
        </div>
      </section>

      <section className="works-section" id="services">
        <div className="works-grid">
          <div className="works-col-left">
            <div className="works-left-top">
              <p className="works-desc">
                Our team of skilled and experienced dental<br />
                professionals strives to create comfortable and<br />
                welcoming environment for each.
              </p>

              <a href="tel:0535516633" className="works-btn black-btn" style={{ textDecoration: 'none' }}>
                <span>Book Appointment</span>
                <ArrowRight className="btn-icon" size={16} />
              </a>
            </div>

            <div className="works-avatars-container">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" alt="Happy member 1" className="avatar filled-avatar" />
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" alt="Happy member 2" className="avatar filled-avatar" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Happy member" className="avatar filled-avatar" />
              </div>
              <div className="avatar-text">
                <span className="avatar-text-bold">10K+ happy</span><br />
                <span className="avatar-text-light">member</span>
              </div>
            </div>
          </div>

          <div className="works-col-right">
            <h2 className="works-title" style={{ marginBottom: '4rem' }}>Services We Provide<br />Are Listed Below</h2>

            <div className="works-images-grid">
              <div className="work-card">
                <img src="/works_img1.png" alt="Teeth Straightening" className="work-card-img" />
                <h3 className="work-card-title">Teeth Straightening</h3>
                <p className="work-card-desc">Improve your smile with cleaning.</p>
              </div>

              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Dental Implant" className="work-card-img" />
                <h3 className="work-card-title">Dental Implant</h3>
                <p className="work-card-desc">Improve your smile with cleaning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partner-section">
        <h2 className="partner-title">Our Trusted Partners</h2>
        <p className="partner-description">
          We collaborate with world-class dental brands to ensure you receive 
          the highest quality materials and technology for your smile.
        </p>
        <div className="partner-marquee-container">
          <div className="partner-marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="partner-card"
              >
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
