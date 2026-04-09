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
  const isServices = location.pathname === '/services';
  const isGallery = location.pathname === '/gallery';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHome ? 'inner-header' : ''}`}>
      <Link to="/" className="logo">LifeDent</Link>

      <nav className="nav-menu">
        <Link to="/" className={`nav-link ${isHome && !location.hash ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isAbout ? 'active' : ''}`}>About</Link>
        <Link to="/services" className={`nav-link ${isServices ? 'active' : ''}`}>Services</Link>
        <Link to="/gallery" className={`nav-link ${isGallery ? 'active' : ''}`}>Gallery</Link>
      </nav>

      <div className="nav-contact" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/booking" className="call-now-btn" style={{ padding: '0.65rem 1.15rem' }}>
          <span>Book Now</span>
          <Phone className="btn-icon" size={16} />
        </Link>
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
          <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/booking" className="call-now-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Book Now</span>
            <Phone className="btn-icon" size={16} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
