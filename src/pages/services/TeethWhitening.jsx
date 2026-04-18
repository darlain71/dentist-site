import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import FAQ from '../../components/FAQ';

const TeethWhitening = () => {
  return (
    <>
      <Helmet>
        <title>Professional Teeth Whitening | LifeDent</title>
        <meta name="description" content="Brighten your smile with professional teeth whitening services at LifeDent, East Legon and Oyarifa." />
      </Helmet>
      <div className="service-detail-page">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="service-page-title">Professional Teeth Whitening</h1>
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Teeth Whitening" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
            Achieve a dazzling, confident smile with our professional teeth whitening solutions. Our safe, effective treatments can lighten your teeth by several shades in just one visit.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Us?</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Immediate, visible results</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Safe for enamel</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Customized treatment plans</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Long-lasting brightness</li>
          </ul>

          <Link to="/booking" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '4rem' }}>
            <span>Book Whitening Session</span>
            <ArrowUpRight className="btn-icon" size={16} />
          </Link>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default TeethWhitening;
