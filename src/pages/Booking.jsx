import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const services = [
    'General Consultation',
    'Teeth Whitening',
    'Dental Implants',
    'Root Canal Treatment',
    'Orthodontics',
    'Scale and Polish',
    'Cavity Filling'
  ];

  if (submitted) {
    return (
      <div className="booking-page-container" style={{ padding: '8rem 5% 4rem' }}>
        <div className="booking-success-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', background: '#fff', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '2rem', color: '#10b981' }}>
            <CheckCircle size={80} strokeWidth={1.5} />
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700' }}>Booking Received!</h1>
          <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Thank you for choosing LifeDent. One of our specialists will call you shortly to confirm your preferred time and finalize your appointment.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="book-appointment-btn"
            style={{ margin: '0 auto' }}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page-container">
      <Helmet>
        <title>Book an Appointment | LifeDent - Expert Dental Care</title>
        <meta name="description" content="Schedule your dental visit at LifeDent. Choose your service, preferred date and time for expert dental care in Accra." />
      </Helmet>

      <section className="booking-hero">
        <div className="booking-hero-content">
          <h1 className="booking-title">Schedule Your Visit</h1>
          <p className="booking-subtitle">
            Take the first step towards a healthier, brighter smile. 
            Fill out the form below and we'll handle the rest.
          </p>
        </div>
      </section>

      <section className="booking-form-section">
        <div className="booking-grid">
          <div className="booking-form-wrapper">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label><User size={18} /> Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label><Phone size={18} /> Phone Number</label>
                  <input type="tel" placeholder="024 000 0000" required />
                </div>
              </div>

              <div className="form-group">
                <label><Mail size={18} /> Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label><MessageSquare size={18} /> Select Service</label>
                <select required>
                  <option value="">Choose a service...</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label><Calendar size={18} /> Preferred Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label><Clock size={18} /> Preferred Time</label>
                  <select required>
                    <option value="">Select time slot...</option>
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label><MessageSquare size={18} /> Additional Notes (Optional)</label>
                <textarea placeholder="Tell us about any specific concerns..." rows="4"></textarea>
              </div>

              <button type="submit" className="booking-submit-btn">
                Confirm Booking Request
              </button>
            </form>
          </div>

          <div className="booking-info-sidebar">
            <div className="info-card">
              <h3>Why Choose LifeDent?</h3>
              <ul className="info-list">
                <li>Certified specialist dentists</li>
                <li>State-of-the-art dental technology</li>
                <li>Comfortable, pain-free environment</li>
                <li>Affordable payment plans available</li>
              </ul>
            </div>
            
            <div className="info-card quick-contact">
              <h3>Quick Contact</h3>
              <p>Need immediate assistance?</p>
              <a href="tel:0248632660" className="sidebar-phone">024 863 2660</a>
              <p className="working-hours">Mon - Sat: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
