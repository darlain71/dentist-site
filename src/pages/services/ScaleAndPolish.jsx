import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FAQ from '../../components/FAQ';

const ScaleAndPolish = () => {
  return (
    <>
      <Helmet>
        <title>Scale & Polish | Dental Signature GH</title>
        <meta name="description" content="Professional teeth cleaning, scale and polish services at Dental Signature GH, Accra." />
      </Helmet>
      <div className="service-detail-page" style={{ padding: '6rem 5%', backgroundColor: '#fff', color: '#1a1a1a', minHeight: '80vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Scale & Polish</h1>
          <img src="https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Scale and Polish" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
            A scale and polish cleans your teeth thoroughly to remove built-up plaque and tartar. This not only keeps your teeth clean and bright but helps prevent gum disease.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Removes stubborn stains and tartar</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Helps prevent bleeding gums</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Cures bad breath</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Leaves teeth feeling smooth and clean</li>
          </ul>

          <a href="tel:0248632660" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '4rem' }}>
            <span>Book Your Cleaning</span>
            <ArrowRight className="btn-icon" size={16} />
          </a>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default ScaleAndPolish;
