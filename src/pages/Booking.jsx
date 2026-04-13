import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import { ArrowRight, ChevronDown, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const CustomSelect = ({ label, options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="custom-select-container">
      <label>{label}</label>
      <div 
        className={`custom-select-trigger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || placeholder}</span>
        <ChevronDown size={20} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-select-options">
          {options.map((opt) => (
            <div 
              key={opt} 
              className={`custom-select-option ${value === opt ? 'active' : ''}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [treatment, setTreatment] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'booking',
        name,
        email,
        phone,
        treatment: treatment || 'Not specified',
        date,
        timeSlot: timeSlot || 'Not specified',
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          window.scrollTo(0, 0);
        } else {
          setSubmitError(true);
        }
      })
      .catch(() => {
        setSubmitError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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

  const times = [
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 7:00 PM)'
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
            Thank you for choosing Dental Signature. One of our specialists will call you shortly to confirm your preferred time and finalize your appointment.
          </p>
          <Link 
            to="/"
            className="book-appointment-btn"
            style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
          >
            <span>Return Home</span>
            <ArrowRight size={18} />
          </Link>
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
        <p className="booking-form-subtitle">
          Ready for a brighter, healthier smile? Fill out the form below to request your appointment 
          and our team will be in touch shortly to confirm your visit.
        </p>
        
        <form
          className="booking-form-modern"
          name="booking"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="booking" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Hidden inputs to capture custom select values */}
          <input type="hidden" name="treatment" value={treatment} />
          <input type="hidden" name="timeSlot" value={timeSlot} />

          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-col-modern">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="Enter number" 
                required 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-col-modern">
              <CustomSelect 
                label="Treatment"
                placeholder="Select Treatment"
                options={services}
                value={treatment}
                onChange={setTreatment}
              />
            </div>
          </div>

          <div className="form-row-modern">
            <div className="form-col-modern">
              <label>Preferred Date</label>
              <div className="date-input-wrapper">
                <input 
                  type="date" 
                  name="date"
                  required 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={date ? 'has-value' : ''}
                />
                {!date && <span className="date-mobile-placeholder">select date</span>}
              </div>
            </div>
            <div className="form-col-modern">
              <CustomSelect 
                label="Preferred Time"
                placeholder="Select time slot"
                options={times}
                value={timeSlot}
                onChange={setTimeSlot}
              />
            </div>
          </div>

          {/* Error feedback message */}
          {submitError && (
            <div className="form-feedback-error" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '12px',
              color: '#dc2626',
              fontSize: '0.95rem',
              marginTop: '0.5rem',
              animation: 'fadeInUp 0.3s ease'
            }}>
              <AlertCircle size={20} />
              <span>Something went wrong. Please try again or call us directly at <a href="tel:0535516633" style={{ color: '#dc2626', fontWeight: '600' }}>053 551 6633</a>.</span>
            </div>
          )}

          <div className="form-footer-modern">
            <button type="submit" className="modern-book-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="spin-icon" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Book Appointment</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Booking;
