import React from 'react';
import { Helmet } from 'react-helmet-async';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Gallery = () => {
  // Adding size properties to define their grid span
  const images = [
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80', alt: 'Clinic Interior', size: 'extra-big' },
    { src: 'https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg', alt: 'Dental Procedure', size: 'normal' },
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', alt: 'Patient Consultation', size: 'big' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80', alt: 'Modern Equipment', size: 'normal' },
    { src: 'https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Smiling Patient', size: 'big' },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80', alt: 'Professional Checkup', size: 'normal' }
  ];

  return (
    <div className="new-about-container">
      <Helmet>
        <title>Gallery | LifeDent</title>
        <meta name="description" content="View our gallery to see our state-of-the-art facilities and happy patients at LifeDent." />
      </Helmet>
      
      {/* Top Header Section */}
      <section className="booking-form-section site-section">
        <h1 className="new-about-title">Our Gallery</h1>
        <p className="new-about-desc">
          Take a look around our state-of-the-art clinic and see the smiles we've helped create.
        </p>
      </section>

      {/* Gallery Grid Section */}
      <section style={{ padding: 'var(--section-padding-desktop) 5%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gridAutoRows: '280px',
          gridAutoFlow: 'dense',
          gap: '20px',
        }}>
          {images.map((img, index) => (
            <div key={index} className={`gallery-page-card ${img.size}`}>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block' 
                  }} 
                />
              </div>
            ))}
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Gallery;
