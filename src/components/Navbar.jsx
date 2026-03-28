import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      <Link to="/" className="logo">LifePath</Link>

      <nav className="nav-menu">
        <Link to="/" className={`nav-link ${isHome && !location.hash ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isAbout ? 'active' : ''}`}>About</Link>
        <Link to="/product" className={`nav-link ${isProduct ? 'active' : ''}`}>Product</Link>
        <Link to="/services" className={`nav-link ${isServices ? 'active' : ''}`}>Services</Link>
      </nav>

      <button className="call-now-btn">
        <Phone className="btn-icon" size={16} />
        <span>Call Now</span>
      </button>
    </header>
  );
};

export default Navbar;
