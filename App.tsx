
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import Home from './pages/Home';
import HoldingsGroup from './pages/HoldingsGroup';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SystemDemo from './pages/SystemDemo';
import Builder from './pages/Builder';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-zener-dark">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zener" element={<Home />} />
            <Route path="/holdings" element={<HoldingsGroup />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/system" element={<SystemDemo />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
};

export default App;
