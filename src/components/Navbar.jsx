import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProduct = location.pathname === '/product';
  const isServices = location.pathname === '/services';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHome ? 'inner-header' : ''}`}>
      <Link to="/" className="logo">LifeDent</Link>

      <nav className="nav-menu">
        <Link to="/" className={`nav-link ${isHome && !location.hash ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isAbout ? 'active' : ''}`}>About</Link>
        <Link to="/product" className={`nav-link ${isProduct ? 'active' : ''}`}>Product</Link>
        <Link to="/services" className={`nav-link ${isServices ? 'active' : ''}`}>Services</Link>
      </nav>

      <div className="nav-contact" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="tel:0248632660" className="call-now-btn" style={{ padding: '0.65rem 1rem' }}>
          <Phone className="btn-icon" size={16} />
          <span>Call to Book</span>
        </a>
        <a href="tel:0554532013" className="call-now-btn" style={{ padding: '0.65rem 1rem', display: 'none' }} id="mobile-only-second-phone">
          <Phone className="btn-icon" size={16} />
        </a>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
        <Menu size={28} />
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} />
          </button>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/product" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Product</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <a href="tel:0248632660" className="call-now-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <Phone className="btn-icon" size={16} />
            <span>024 8632 660</span>
          </a>
          <a href="tel:0554532013" className="call-now-btn" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '0.5rem' }}>
            <Phone className="btn-icon" size={16} />
            <span>055 453 2013</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
