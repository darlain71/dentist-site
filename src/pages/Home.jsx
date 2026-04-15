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
        <title>LifeDent | Best Dentist in East Legon Accra</title>
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





      <section className="about-section site-section" id="about">
        <div className="about-grid">
          <div className="about-col-left">
            <img src="/about_left.png" alt="Dental examination" className="about-img-left" />
          </div>

          <div className="about-col-center">
            <h2 className="section-title-universal">A Simple Way to Save<br />on Dental Care</h2>
            <p className="section-desc-universal">
              Our team of skilled and experienced dental professionals strives
              to create comfortable and welcoming environment for each and
              every patient. We offer a wide range of services.
            </p>
            <Link to="/booking" className="section-btn-universal">
              <span>Book Appointment</span>
              <ArrowRight className="btn-icon" size={16} />
            </Link>
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

      {/* Real Results Section - Bento Grid Redesign */}
      <section className="product-section site-section" id="results">
        <div className="product-header-bento">
          <h2 className="section-title-universal">Real Results,<br />Real Smiles</h2>
          <div className="header-desc-container">
            <p className="section-desc-universal">
              From daily essentials to timeless care, explore how our treatments
              have transformed smiles and lives naturally and beautifully.
            </p>
          </div>
        </div>

        <div className="bento-grid">
          {/* Centered Column: Tall Image Card */}
          <div className="bento-card tall img-card">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Dental Care" className="bento-img" />
            <div className="bento-img-overlay bottom-aligned">
              <div className="bento-img-content">
                <span className="bento-category-label">Dental Care</span>
                <h3 className="bento-img-title">Crafted for a<br />Confident Life.</h3>
              </div>
            </div>
          </div>

          {/* Right Column: Horizontal Image Cards */}
          <div className="bento-col-right">
            <div className="bento-card horizontal img-card">
              <img src="https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Whitening" className="bento-img" />
              <div className="bento-img-overlay bottom-aligned">
                <div className="bento-img-content">
                  <span className="bento-category-label small">Whitening</span>
                  <h3 className="bento-img-title small">Science Meets<br />Smile Artistry.</h3>
                </div>
              </div>
            </div>
            <div className="bento-card horizontal img-card">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Restoration" className="bento-img" />
              <div className="bento-img-overlay bottom-aligned">
                <div className="bento-img-content">
                  <span className="bento-category-label small">Restoration</span>
                  <h3 className="bento-img-title small">Pure, Gentle,<br />Lasting Smile.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Section - No Card Background */}
        <div className="bento-feature-no-card">
          <div className="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Modern Clinic" className="feature-img" />
             <div className="play-button">
               <div className="play-icon">▶</div>
             </div>
             <div className="feature-tags">
               <span>#ExpertCare</span>
               <span>#ModernTech</span>
               <span>#LifeDent</span>
             </div>
          </div>
          <div className="feature-content">
            <h2 className="feature-title">Make Every Visit<br />Simple, Calm,<br />and Effective</h2>
            <p className="feature-text">
              Ready to experience dental care differently? Explore our modern 
              approach, painless solutions, and sustainable standards. Make small 
              changes today that create a lasting impact on your oral health.
            </p>
            <Link to="/booking" className="feature-btn">
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="works-section site-section" id="services">
        <div className="works-grid">
          <div className="works-col-left">
            <div className="works-left-top">
              <h2 className="section-title-universal">Services We Provide<br />Are Listed Below</h2>
            </div>

            <div className="works-avatars-container desktop-only-avatars">
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
            <p className="section-desc-universal">
              Our team of skilled and experienced dental<br />
              professionals strives to create comfortable and<br />
              welcoming environment for each.
            </p>

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
                <div className="works-avatars-container mobile-only-avatars">
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
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
