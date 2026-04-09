import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import CheckUp from './pages/services/CheckUp';
import ScaleAndPolish from './pages/services/ScaleAndPolish';
import TeethWhitening from './pages/services/TeethWhitening';
import CavityFilling from './pages/services/CavityFilling';
import Endodontics from './pages/services/Endodontics';
import './index.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/services/check-up" element={<CheckUp />} />
        <Route path="/services/scale-and-polish" element={<ScaleAndPolish />} />
        <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
        <Route path="/services/cavity-filling" element={<CavityFilling />} />
        <Route path="/services/endodontics" element={<Endodontics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
