import React from 'react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Services = () => {
  return (
    <div className="inner-page-container">


      <section className="services-section">
        <div className="services-header">
          <h2 className="services-title">Services We Provide</h2>

        </div>

        <div className="works-grid" style={{ marginTop: '1.5rem' }}>
          <div className="works-col-left">
            <h2 className="works-title"></h2>
            <p className="works-desc">We offer a full spectrum of dental services designed to keep your smile healthy and bright.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <div className="work-card">
                <img src="/works_img1.png" alt="Teeth Straightening" className="work-card-img" />
                <h3 className="work-card-title">Teeth Straightening</h3>
                <p className="work-card-desc">Improve your smile with aligners and braces.</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Dental Implant" className="work-card-img" />
                <h3 className="work-card-title">Dental Implant</h3>
                <p className="work-card-desc">Permanent solutions for missing teeth.</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/3845980/pexels-photo-3845980.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Teeth Whitening" className="work-card-img" />
                <h3 className="work-card-title">Teeth Whitening</h3>
                <p className="work-card-desc">Professional and safe whitening services.</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" alt="Root Canal" className="work-card-img" />
                <h3 className="work-card-title">Root Canal</h3>
                <p className="work-card-desc">Painless procedures to save your infected tooth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="works-grid" style={{ marginTop: '6rem' }}>
          <div className="works-col-left">
            <h2 className="works-title">Our Specialists</h2>
            <p className="works-desc">Meet our team of experienced dental professionals.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="Dr. Sarah" className="work-card-img" />
                <h3 className="work-card-title">Dr. Sarah Jenkins</h3>
                <p className="work-card-desc">Orthodontist</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Dr. Mike" className="work-card-img" />
                <h3 className="work-card-title">Dr. Michael Chen</h3>
                <p className="work-card-desc">Oral Surgeon</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/5327914/pexels-photo-5327914.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dr. Emily" className="work-card-img" />
                <h3 className="work-card-title">Dr. Emily Davis</h3>
                <p className="work-card-desc">Pediatric Dentist</p>
              </div>
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" alt="Dr. Robert" className="work-card-img" />
                <h3 className="work-card-title">Dr. Robert Smith</h3>
                <p className="work-card-desc">Endodontist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Services;
