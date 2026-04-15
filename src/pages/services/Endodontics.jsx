import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import FAQ from '../../components/FAQ';

const Endodontics = () => {
  return (
    <>
      <Helmet>
        <title>Endodontics & Root Canal | LifeDent</title>
        <meta name="description" content="Expert endodontic treatments and painless root canal therapy at LifeDent, Accra." />
      </Helmet>
      <div className="service-detail-page" style={{ padding: 'calc(var(--section-padding-desktop) + 6rem) 5% 4rem 5%', backgroundColor: '#fff', color: '#1a1a1a', minHeight: '80vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Endodontics (Root Canal)</h1>
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Endodontics" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
            Endodontic treatment, commonly known as a root canal, is designed to save an infected or damaged tooth. By removing the infected pulp and sealing the tooth, we prevent further infection and alleviate pain.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>When Do You Need It?</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Severe toothache upon chewing</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Prolonged sensitivity to heat or cold</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Discoloration of the tooth</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="#0b0f19" /> Swelling and tenderness in nearby gums</li>
          </ul>

          <Link to="/booking" className="about-btn" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '4rem' }}>
            <span>Consult Our Endodontist</span>
            <ArrowUpRight className="btn-icon" size={16} />
          </Link>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default Endodontics;
