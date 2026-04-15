import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import FAQ from '../../components/FAQ';

const CavityFilling = () => {
  return (
    <>
      <Helmet>
        <title>Cavity Filling | LifeDent</title>
        <meta name="description" content="Painless cavity fillings at LifeDent. Restore your tooth's structure and prevent further decay." />
      </Helmet>
      <div className="service-detail-page" style={{ padding: 'var(--section-padding-desktop) 5%', backgroundColor: '#fff', color: '#1a1a1a', minHeight: '80vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Cavity Filling</h1>
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Cavity Filling" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
            A cavity filling restores a tooth damaged by decay back to its normal function and shape. Our modern fillings match the natural color of your teeth, ensuring a seamless and fully functional smile.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Procedure</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Local anesthesia for a pain-free experience</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Removal of the decayed portion</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Cleaning the affected area</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Filling the cavity with durable, tooth-colored materials</li>
          </ul>

          <Link to="/booking" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '4rem' }}>
            <span>Book Your Filling</span>
            <ArrowUpRight className="btn-icon" size={16} />
          </Link>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default CavityFilling;
