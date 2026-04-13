import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import { ArrowRight, ChevronDown, CheckCircle, AlertCircle, Loader2, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const CustomCalendar = ({ selectedDate, onSelect, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState(selectedDate ? new Date(selectedDate) : null);

  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  // Sync temp selection with prop whenever modal opens or prop changes
  React.useEffect(() => {
    if (selectedDate) {
      const d = new Date(selectedDate);
      setTempSelectedDate(d);
      setCurrentDate(d);
    } else {
      setTempSelectedDate(null);
      setCurrentDate(new Date());
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setTempSelectedDate(newDate);
    
    // Immediately update the parent state so it appears in the input box
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(newDate.getDate()).padStart(2, '0');
    onSelect(`${year}-${month}-${dayStr}`);
  };

  const handleClear = () => {
    setTempSelectedDate(null);
    onSelect('');
    onClose();
  };

  const renderDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = [];
    const firstDay = firstDayOfMonth(month, year);
    const totalDays = daysInMonth(month, year);

    // Adjust first day to start from Monday (0: Sun -> 6: Mon)
    // Image shows M T W T F S S
    const offset = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < offset; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = tempSelectedDate && 
        tempSelectedDate.getDate() === day && 
        tempSelectedDate.getMonth() === month && 
        tempSelectedDate.getFullYear() === year;

      // Randomly add dots for the aesthetic match
      const hasDots = (day + month) % 3 === 0;
      const dotsCount = (day % 3) + 1;

      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isSelected ? 'active' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          <span className="day-number">{day}</span>
          <div className="day-dots">
            {hasDots && Array.from({ length: dotsCount }).map((_, i) => (
              <span key={i} className={`dot dot-${i % 3}`}></span>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="custom-calendar-popup">
      <div className="calendar-header">
        <button type="button" onClick={handlePrevMonth} className="nav-btn"><ChevronLeft size={20} /></button>
        <span className="month-name">{months[currentDate.getMonth()]}</span>
        <button type="button" onClick={handleNextMonth} className="nav-btn"><ChevronRight size={20} /></button>
      </div>

      <div className="calendar-weekdays">
        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
      </div>

      <div className="calendar-grid">
        {renderDays()}
      </div>

      <div className="calendar-actions">
        <button type="button" onClick={handleClear} className="action-btn clear">Clear</button>
        <button type="button" onClick={onClose} className="action-btn cancel">Close</button>
      </div>
    </div>
  );
};

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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setTreatment('');
    setDate('');
    setTimeSlot('');
  };

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
          clearForm();
          // Hide success message after 10 seconds
          setTimeout(() => setSubmitted(false), 10000);
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

  return (
    <div className="booking-page-container">
      <Helmet>
        <title>Make your Booking | LifeDent</title>
      </Helmet>

      {/* Success Popup */}
      {submitted && (
        <div className="success-popup-overlay">
          <div className="success-popup-content">
            <div className="success-popup-icon">
              <CheckCircle size={48} strokeWidth={1.5} />
            </div>
            <div className="success-popup-text">
              <h3>Booking Received!</h3>
              <p>One of our specialists will call you shortly to confirm your appointment.</p>
            </div>
            <button 
              className="success-popup-close"
              onClick={() => setSubmitted(false)}
            >
              Okay, got it
            </button>
          </div>
        </div>
      )}

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
              <div 
                className="date-input-wrapper" 
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                style={{ cursor: 'pointer' }}
              >
                <input 
                  type="text" 
                  placeholder="select date"
                  required 
                  readOnly
                  value={formatDateForDisplay(date)}
                  className={date ? 'has-value' : ''}
                />
                <input type="hidden" name="date" value={date} />
                <Calendar 
                  className="calendar-icon-trigger" 
                  size={20} 
                />
                
                {isCalendarOpen && (
                  <CustomCalendar 
                    selectedDate={date} 
                    onSelect={setDate} 
                    onClose={() => setIsCalendarOpen(false)} 
                  />
                )}
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
