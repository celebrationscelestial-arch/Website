import React from 'react';
import { ArrowRight } from 'lucide-react'; // Removed 'Play' and 'useState'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // REMOVED: const [playVideo, setPlayVideo] = useState(true);

 return (
   // REMOVED: bg-pearl-gradient
   <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    
      {/* --- YOUTUBE IFRAME WITH CSS HACK TO HIDE TITLE BAR --- */}
      <iframe 
        className="absolute z-0 w-full object-cover h-[calc(100%+120px)] -top-[60px]" 
        src="https://www.youtube.com/embed/TD402-YW9AQ?si=WFCMdA0j0V9FsR4J?autoplay=1&mute=1&loop=1&playsinline=1&controls=0&rel=0&playlist=pk_RCOexuac&vq=hd720" 
        title="Hero background video" 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
      ></iframe>

 
      {/* --- This overlay is good, it stays --- */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* This button remains on top (z-20) and is unchanged */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToContact}
          className="group bg-white hover:shadow-divine text-deep-black px-12 py-5 rounded-full text-lg font-inter font-semibold transition-all duration-700 flex items-center justify-center space-x-2 shadow-divine hover:shadow-gold transform hover:scale-110"
        >
          <span>Start Planning</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-700" />
        </button>
      </div>
    </section>
  );

};

export default Hero;