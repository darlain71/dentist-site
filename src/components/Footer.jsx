import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialIcons } from './ui/SocialIcons';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <SocialIcons />
      </div>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="footer-left">
            <h3 className="footer-heading">Contact & Locations</h3>
            <div className="footer-contact-info">
              <p><strong>East Legon Clinic:</strong><br />Accra, Ghana</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Oyarifa Clinic:</strong><br />Accra, Ghana</p>
              <p style={{ marginTop: '1rem' }}>Phone: <a href="tel:0248632660" style={{ color: 'inherit', textDecoration: 'none' }}>024 8632 660</a> / <a href="tel:0554532013" style={{ color: 'inherit', textDecoration: 'none' }}>055 453 2013</a><br />Email: info@lifepath.com</p>
            </div>
            <div className="footer-email-line"></div>
          </div>
          <div className="footer-links-grid">
            <ul className="footer-links-col">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
