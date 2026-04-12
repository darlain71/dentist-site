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
              <a href="tel:0535516633" style={{ color: 'inherit', textDecoration: 'none' }}>053 551 6633</a>
              {' '}/ {' '}
              <a href="tel:0505017267" style={{ color: 'inherit', textDecoration: 'none' }}>050 501 7267</a>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'center' }}>
            <p className="footer-copyright" style={{ paddingBottom: '0' }}>
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="footer-copyright" style={{ paddingBottom: '1.5rem' }}>
              Created By <a href="https://wa.me/qr/V4R6BT5BX6PPB1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Darlain</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
