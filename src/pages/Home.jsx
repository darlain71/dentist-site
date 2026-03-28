import React, { useState } from 'react';
import { Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <div className="hero-section" id="home">
        <div className="hero-background"></div>

        <main className="hero-content">
          <h1 className="hero-title">
            <span className="title-row">Seamless</span>
            <span className="title-row">
              Dental

              Care
            </span>
          </h1>

          <p className="hero-subtext">
            Whether it's a routine checkup or a major dental emergency,<br />
            our experienced professionals are just a call away
          </p>

          <button className="book-appointment-btn">
            <span>Book Appointment</span>
            <ArrowRight className="btn-icon" size={18} />
          </button>
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
            <button className="about-btn">
              <span>Book Appointment</span>
              <ArrowRight className="btn-icon" size={16} />
            </button>
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

      <section className="product-section" id="product">
        <div className="product-container">
          <div className="product-top-row">
            <div className="product-info-left">
              <h2 className="product-heading">
                Doctor Consultations<br />
                Are Free & Trusted
              </h2>
              <p className="product-subtext-left">
                Team carefully evaluates your results to provide actionable<br />
                insights for improving your health & lifespan.
              </p>
            </div>

            <div className="product-image-center">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Dental consultation" className="product-img-main" />
            </div>

            <div className="product-cta-right">
              <p className="product-desc-right">
                Take control of your health with a comprehensive<br />
                assessment unlike any other. We use the latest medical<br />
                innovations, including next-generation MRI,<br />
                cardiovascular & neurocognitive assessments, early<br />
                cancer detection, and genetic testing.
              </p>
              <button className="product-btn about-btn">
                <span>Book Appointment</span>
                <ArrowRight className="btn-icon" size={18} />
              </button>
            </div>
          </div>

          <div className="product-bottom-row">
            <div className="product-video-wrapper">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Medical procedure" className="product-img-video" />
              <div className="video-play-btn">
                <svg viewBox="0 0 24 24" fill="white" className="play-icon">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="product-extra-image">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Patient care" className="product-img-extra" />
            </div>
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

              <button className="works-btn black-btn">
                <span>Book Appointment</span>
                <ArrowRight className="btn-icon" size={16} />
              </button>
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
            <h2 className="works-title">Services We Provide<br />Are Listed Below</h2>

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

      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
