import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // This is now the single root element.
    // I'm using <section> since you had a closing </section> tag.
    // It's relative, so the absolute children will be positioned inside it.
    <section className="relative w-full h-screen overflow-hidden">

      {/* 1. The Video Background */}
      <iframe 
        className="absolute z-0 w-full h-[calc(100%+120px)] -top-[60px] pointer-events-none" 
        src="https://www.youtube.com/embed/TD402-YW9AQ?autoplay=1&mute=1&loop=1&playsinline=1&controls=0&rel=0&playlist=TD402-YW9AQ&vq=hd720" 
        title="Hero background video"  
        allow="autoplay; encrypted-media" 
      ></iframe>
 
      {/* 2. The Dark Overlay (NOW INSIDE the parent) */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* 3. The Button (NOW INSIDE the parent) */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToContact}
          className="group bg-white hover:shadow-divine text-deep-black px-12 py-5 rounded-full text-lg font-inter font-semibold transition-all duration-700 flex items-center justify-center space-x-2 shadow-divine hover:shadow-gold transform hover:scale-110"
        >
          <span>Start Planning</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-700" />
        </button>
      </div>

    </section> // This closing tag now correctly matches the opening <section>
  );
};

export default Hero;