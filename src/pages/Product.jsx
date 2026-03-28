import React from 'react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Product = () => {
  return (
    <div className="inner-page-container">


      <section className="works-section">
        <div className="works-grid">
          <div className="works-col-left">
            <h2 className="works-title">Comprehensive Coverage</h2>
            <p className="about-desc">
              We offer a variety of plans tailored to your specific dental needs.
              Our products are designed to provide maximum value while ensuring
              top-tier dental health.
            </p>
          </div>
        </div>

        <div className="works-grid" style={{ marginTop: '1.5rem' }}>
          <div className="works-col-left">
            <h2 className="works-title">Featured Products</h2>
            <p className="works-desc">High-quality dental products for your health.</p>
          </div>
          <div className="works-col-right">
            <div className="works-images-grid">
              <div className="work-card">
                <img src="https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&w=600&q=80" alt="Electric Toothbrush" className="work-card-img" />
                <h3 className="work-card-title">Pro Sonic Brush</h3>
                <p className="work-card-desc">Advanced plaque removal and daily care.</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/5217911/pexels-photo-5217911.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Whitening Kit" className="work-card-img" />
                <h3 className="work-card-title">Advanced Whitening</h3>
                <p className="work-card-desc">Professional grade whitening kit at home.</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Water Flosser" className="work-card-img" />
                <h3 className="work-card-title">Water Flosser Pro</h3>
                <p className="work-card-desc">Gentle and effective gum cleaning.</p>
              </div>
              <div className="work-card">
                <img src="https://images.pexels.com/photos/4099307/pexels-photo-4099307.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dental Floss Kit" className="work-card-img" />
                <h3 className="work-card-title">Dental Floss Kit</h3>
                <p className="work-card-desc">Essential tools for your daily routine.</p>
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

export default Product;
