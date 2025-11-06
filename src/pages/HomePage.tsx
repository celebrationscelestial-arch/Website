import React from 'react';
// === FIX: DELETE THESE LINES ===
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';

// Import just the page sections
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';


const HomePage = () => {
  return (
    <>
      {/* === FIX: Navigation is GONE === */}
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      {/* === FIX: Footer is GONE === */}
    </>
  );
};

export default HomePage;