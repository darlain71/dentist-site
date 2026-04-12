import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FAQ from '../../components/FAQ';

const CheckUp = () => {
  return (
    <>
      <Helmet>
        <title>Dental Check-Up | Dental Signature GH</title>
        <meta name="description" content="Comprehensive dental check-ups to maintain your oral health at Dental Signature GH, Accra." />
      </Helmet>
      <div className="service-detail-page" style={{ padding: '6rem 5%', backgroundColor: '#fff', color: '#1a1a1a', minHeight: '80vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Comprehensive Dental Check-Up</h1>
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Dental Check-Up" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
            Regular dental check-ups are essential for maintaining good oral hygiene and preventing future issues. Our experienced dentists at Dental Signature GH provide thorough examinations to ensure your teeth and gums are healthy.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What to Expect</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Digital X-rays if needed</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Professional examination of teeth and gums</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Oral cancer screening</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Personalized oral health advice</li>
          </ul>

          <a href="tel:0535516633" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '4rem' }}>
            <span>Book Your Check-Up</span>
            <ArrowRight className="btn-icon" size={16} />
          </a>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default CheckUp;
