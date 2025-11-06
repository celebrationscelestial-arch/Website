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
    /* UPDATED: Set the background to white. The black nav bar will cover the top. */
    <section className="relative w-full h-screen overflow-hidden bg-white">

      {/* 1. The Video Background 
          The parent div clips the video for aspect ratio.
      */}
      <div className="absolute z-0 w-full h-full pointer-events-none overflow-hidden">
        <iframe 
          className="absolute z-0 w-full h-[calc(100%+120px)] -top-[60px] pointer-events-none" 
          src="https://www.youtube.com/embed/pk_RCOexuac?autoplay=1&mute=1&loop=1&playsinline=1&controls=0&rel=0&modestbranding=1&playlist=TD402-YW9AQ&vq=hd1080" 
          title="Hero background video"  
          allow="autoplay; encrypted-media" 
        ></iframe>
      </div>
 
      {/* 2. The Dark Overlay (z-5)
          This layer sits on top of the video (z-0) to darken it
          and also helps block any stray mouse interactions.
      */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>

      {/* 3. The Button (z-20) */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20 w-25 px-10 sm:w-auto">
        <button
          onClick={scrollToContact}
          className="group bg-white hover:shadow-divine text-deep-black px-12 py-5 rounded-full text-lg font-inter font-semibold transition-all duration-700 flex items-center justify-center space-x-2 shadow-divine hover:shadow-gold transform hover:scale-105 w-full sm:w-auto"
        >
          <span>Start Planning</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-700" />
        </button>
      </div>

    </section>
  );
};

export default Hero;