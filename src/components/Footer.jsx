import React from 'react';
import { SocialIcons } from './ui/SocialIcons';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <SocialIcons />
      </div>
      <footer className="footer-section">
        <h2 className="footer-heading" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Contact &amp; Locations</h2>
        <div className="footer-contact-row">
          <div className="footer-contact-item">
            <strong>East Legon Clinic</strong>
            <span>Accra, Ghana</span>
          </div>
          <div className="footer-divider" />
          <div className="footer-contact-item">
            <strong>Oyarifa Clinic</strong>
            <span>Accra, Ghana</span>
          </div>
          <div className="footer-divider" />
          <div className="footer-contact-item">
            <strong>Phone</strong>
            <span>
              <a href="tel:0248632660" style={{ color: 'inherit', textDecoration: 'none' }}>024 8632 660</a>
              {' '}/ {' '}
              <a href="tel:0554532013" style={{ color: 'inherit', textDecoration: 'none' }}>055 453 2013</a>
            </span>
          </div>
          <div className="footer-divider" />
          <div className="footer-contact-item">
            <strong>Email</strong>
            <span>
              <a href="mailto:info@lifepath.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@lifepath.com</a>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright" style={{ paddingBottom: '0.5rem' }}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="footer-copyright">
            Created By <a href="https://wa.me/qr/V4R6BT5BX6PPB1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Darlain</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
