import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';



const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // --- CHANGE THIS LINE ---
  // Set the initial state to true to play the video on load
  const [playVideo, setPlayVideo] = useState(true);

  return (
   <section id="hero" className="relative min-h-screen flex items-center bg-pearl-gradient overflow-hidden">
  {/* Divine Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 to-black">
    {/* The blurred circles */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-divine-gold/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-48 h-48 bg-royal-gold/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-divine-gold/5 rounded-full blur-3xl"></div> 
  </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* == COLUMN 1: Content == */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight">
                <span className="text-white font-vibes-7xl lg:text-7xl">CELESTIAL</span>
                <span className="text-divine-gold block bg-gold-gradient bg-clip-text text-transparent ">CELEBRATIONS</span>
                <span className="text-3xl lg:text-5xl font-dancing font-light text-white/60 block mt-4">
                  Your dream, Our stage
                </span>
              </h1>
              <p className="text-xl font-inter text-white/60 max-w-xl leading-relaxed">
                Where the world meets India, and your dreams find their perfect stage.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-white hover:shadow-divine text-deep-black px-12 py-5 rounded-full text-lg font-inter font-semibold transition-all duration-700 flex items-center justify-center space-x-2 shadow-divine hover:shadow-gold transform hover:scale-110"
              >
                <span>Start Planning</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-700" />
              </button>
              
              <button className="group border-2 border-charcoal text-charcoal bg-white hover:bg-gold-gradient hover:text-white px-12 py-5 rounded-full text-lg font-inter font-semibold transition-all duration-700 flex items-center justify-center space-x-2 hover:shadow-divine transform hover:scale-105">
                <span>View Portfolio</span>
              </button>
            </div>
            
            {/* Decorative elements (correctly placed within Column 1) */}

<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-royal-gold rounded-full opacity-25 blur-2xl animate-float2"></div>

{/* New bubble in top-left corner */}
<div className="absolute -top-8 -left-8 w-32 h-32 bg-divine-gold rounded-full opacity-20 blur-2xl animate-float3"></div>

{/* Bubble 1: Top-right corner */}
<div className="absolute top-12 right-12 w-28 h-28 bg-royal-gold rounded-full opacity-15 blur-2xl animate-float1 delay-2000"></div>

{/* Bubble 2: Bottom-left corner */}
<div className="absolute bottom-12 left-12 w-28 h-28 bg-royal-gold rounded-full opacity-15 blur-2xl animate-float2 delay-4000"></div>

{/* Bubble 3: Top-left corner */}
<div className="absolute top-8 left-16 w-28 h-28 bg-royal-gold rounded-full opacity-15 blur-2xl animate-float3"></div>
              
          
  
              </div>

          {/* == COLUMN 2: Video Placeholder == */}
          <div className="relative z-10">
            <div className="relative bg-white rounded-3xl shadow-divine overflow-hidden border-2 border-divine-gold/30 hover:border-divine-gold/50 transition-all duration-700 animation-float1">
              <div className="aspect-video bg-pearl-gradient flex items-center justify-center relative animation-float2">
                <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/10 to-royal-gold/20 animation-float3"></div>

                {playVideo ? (
                  <video
                    src="/celestialvid.MP4"
                    autoPlay
                    controls
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-20"
                  />
                ) : (
                  <div className="relative z-10 text-center space-y-4">
                    <div
                      onClick={() => setPlayVideo(true)}
                      className="bg-gold-gradient backdrop-blur-sm rounded-full p-8 w-28 h-28 flex items-center justify-center mx-auto shadow-divine hover:shadow-gold transition-all duration-700 cursor-pointer group transform hover:scale-125"
                    >
                      <Play className="h-12 w-12 text-deep-black group-hover:scale-125 transition-transform duration-700" />
                    </div>
                    <p className="text-charcoal font-dancing font-medium text-2xl">Watch Our Divine Story</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
