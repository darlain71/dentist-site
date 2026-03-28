import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer-section">
        <div className="footer-top">
          <div className="footer-left">
            <h3 className="footer-heading">Contact & Location</h3>
            <div className="footer-contact-info">
              <p>442 oxford Street, AK-039-5028<br />Accra,</p>
              <p style={{ marginTop: '1rem' }}>Phone: <a href="tel:+2331234567" style={{ color: 'inherit', textDecoration: 'none' }}>(233) 123-4567</a><br />Email: hello@lifepath.com</p>
            </div>
            <div className="footer-email-line"></div>
          </div>
          <div className="footer-links-grid">
            <ul className="footer-links-col">
              <li><a href="#home">Home</a></li>
              <li><a href="/about">About LifePath</a></li>
              <li><a href="/product">Product</a></li>
              <li><a href="/services">Services</a></li>
            </ul>

            <ul className="footer-links-col">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#whatsapp">WhatsApp</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <h1 className="footer-huge-text">LifePath</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
