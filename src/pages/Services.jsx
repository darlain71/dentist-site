import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Services = () => {
  return (
    <div className="new-about-container">
      <Helmet>
        <title>Our Services | LifeDent</title>
        <meta name="description" content="Comprehensive dental services in Accra: Check-ups, Teeth Whitening, Cavity Fillings, and more at LifeDent." />
      </Helmet>
      <section className="new-about-header site-section">
        <h1 className="section-title-universal">Services</h1>
        <p className="section-desc-universal">
          We offer a full spectrum of dental services designed to keep your smile healthy and bright, 
          from routine checkups to specialized surgery. Our state-of-the-art facility is equipped 
          with the latest technology to ensure your treatments are as effective and pain-free as possible. 
          Trust our experienced team to provide personalized care tailored to exactly what your teeth need to shine their brightest.
        </p>
      </section>

      <section className="services-section site-section">
        <div className="works-grid">
          <div className="works-col-left">
             <h2 className="section-title-universal">Dental Services</h2>
             <p className="section-desc-universal">We offer a full spectrum of dental services designed to keep your smile healthy and bright.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <Link to="/services/check-up" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Check-Up" className="work-card-img" />
                  <h3 className="work-card-title">Comprehensive Check-Up</h3>
                  <p className="work-card-desc">Digital X-rays, exams, and personalized advice.</p>
                </div>
              </Link>
              <Link to="/services/scale-and-polish" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card">
                  <img src="https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Scale & Polish" className="work-card-img" />
                  <h3 className="work-card-title">Scale & Polish</h3>
                  <p className="work-card-desc">Deep cleaning to remove plaque and prevent disease.</p>
                </div>
              </Link>
              <Link to="/services/teeth-whitening" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Teeth Whitening" className="work-card-img" />
                  <h3 className="work-card-title">Teeth Whitening</h3>
                  <p className="work-card-desc">Professional and safe whitening services.</p>
                </div>
              </Link>
              <Link to="/services/cavity-filling" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Cavity Filling" className="work-card-img" />
                  <h3 className="work-card-title">Cavity Filling</h3>
                  <p className="work-card-desc">Painless restoration of decayed teeth.</p>
                </div>
              </Link>
              <Link to="/services/endodontics" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Endodontics" className="work-card-img" />
                  <h3 className="work-card-title">Endodontics (Root Canal)</h3>
                  <p className="work-card-desc">Expert treatments to save infected teeth.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="works-grid" style={{ marginTop: 'var(--section-padding-desktop)' }}>
          <div className="works-col-left">
            <h2 className="section-title-universal">Our Specialists</h2>
            <p className="section-desc-universal">Meet our team of experienced dental professionals.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Dr. Kofi Ansah" className="work-card-img" />
                <h3 className="work-card-title">Dr. Kofi Ansah</h3>
                <p className="work-card-desc" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Lead Dentist & Implantologist</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" alt="Dr. Kojo Nti" className="work-card-img" />
                <h3 className="work-card-title">Dr. Kojo Nti</h3>
                <p className="work-card-desc" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Orthodontist specialist</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--section-padding-desktop)', padding: 'var(--section-padding-mobile)', background: '#ffffff', borderRadius: '32px' }}>
          <h2 className="section-title-universal" style={{ margin: '0 auto var(--heading-p-gap-desktop)' }}>Ready for a Brighter Smile?</h2>
          <p className="section-desc-universal" style={{ margin: '0 auto var(--p-content-gap-desktop)' }}>
            Book your consultation today and experience world-class dental care at LifeDent.
          </p>
          <Link to="/booking" className="section-btn-universal">
            <span>Book Appointment</span>
            <ArrowRight className="btn-icon" size={16} />
          </Link>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Services;
