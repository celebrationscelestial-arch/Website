import React, { useState, useEffect } from 'react';

// --- Image Configuration ---
// Replace these placeholder URLs with the actual paths to your three images.
const weddingImages = [
  'carousel2.jpg',
  'carousel3.jpg',
  'carousel4.jpeg',
  'carousel5.JPG',
  'carousel6.jpeg',
  'carousel7.jpeg',
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This hook handles the automatic sliding logic, no changes needed here.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === weddingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Time delay of 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Text Content (Unchanged) */}
        <header className="mb-16">
          <h1 className="font-great-vibes text-4xl md:text-7xl text-gray-800 mb-6">
            Celestial Celebrations
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed font-serif">
              From small intimate gatherings to large and lavish affairs, our weddings and parties are memorable, magical experiences, perfectly planned and beautifully executed.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-serif">
              Make your 'dreams come true' day more momentous and bewitching. Let your magical moments turn into something undeniable! If you have been looking for the right place to culminate your dream day, you are in the right place. Fulfill your wedding dreams with us, and make it a landmark in your journey of life!
            </p>
          </div>
        </header>

        {/* --- NEW: Carousel Slider Section --- */}
        <main>
          <h2 className="font-great-vibes text-5xl md:text-6xl text-gray-800 mb-8">
            Our Latest Wedding
          </h2>
          
          {/* Carousel Container: Sets up the perspective area */}
          <div className="relative w-full max-w-3xl mx-auto h-64 md:h-96 lg:h-[30rem]">
            {weddingImages.map((src, index) => {
              const prevIndex = (currentIndex - 1 + weddingImages.length) % weddingImages.length;
              const nextIndex = (currentIndex + 1) % weddingImages.length;

              let positionClasses = 'scale-50 opacity-0'; // Default for hidden slides

              if (index === currentIndex) {
                // The active slide in the center
                positionClasses = 'translate-x-0 scale-100 opacity-100 z-10';
              } else if (index === prevIndex) {
                // The previous slide, peeking from the left
                positionClasses = '-translate-x-[65%] scale-75 opacity-60 z-0';
              } else if (index === nextIndex) {
                // The next slide, peeking from the right
                positionClasses = 'translate-x-[65%] scale-75 opacity-60 z-0';
              }
              
              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${positionClasses}`}
                >
                  <img
                    src={src}
                    alt={`Wedding work ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Wedding Name & Gallery Link (Unchanged) */}
          <div className="mt-8">
            <h3 className="text-m font-serif text-gray-800 italic">
 {/* <-- Change this to your desired wedding name */}
            </h3>
            <a 
              href="#gallery" // <-- Change this to the link for your gallery page
              className="inline-block mt-4 px-8 py-3 border border-gray-400 rounded-full text-sm font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-100 hover:border-gray-500 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;