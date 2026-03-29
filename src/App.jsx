import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Services from './pages/Services';
import CheckUp from './pages/services/CheckUp';
import ScaleAndPolish from './pages/services/ScaleAndPolish';
import TeethWhitening from './pages/services/TeethWhitening';
import CavityFilling from './pages/services/CavityFilling';
import Endodontics from './pages/services/Endodontics';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
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
