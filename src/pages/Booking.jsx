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
        <title>Make your Booking | LifeDent</title>
      </Helmet>

      <section className="booking-form-section">
        <h1 className="booking-form-title">Make your Booking</h1>
        
        <form className="booking-form-modern" onSubmit={handleSubmit}>
          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-col-modern">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" required />
            </div>
          </div>

          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter number" required />
            </div>
            <div className="form-col-modern">
              <label>Treatment</label>
              <select required>
                <option value="">Select Treatment</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Preferred Date</label>
              <div className="input-with-icon">
                <input type="date" required />
              </div>
            </div>
            <div className="form-col-modern">
              <label>Preferred Time</label>
              <select required>
                <option value="">Select time slot</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>

          <div className="terms-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept all terms and conditions.</label>
          </div>

          <div className="form-footer-modern">
            <button type="submit" className="modern-book-btn">
              Book Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Booking;
