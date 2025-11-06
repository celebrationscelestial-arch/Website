import React, { useState, useEffect } from 'react';

// --- Image Configuration ---
// Replace these placeholder URLs with the actual paths to your three images.
const weddingImages = [
  'carousel2.jpg',
  'carousel3.jpg',
  'carousel4.jpeg',
  'carousel.jpg',
  'carousel6.jpg',
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
    }, 3000); // Time delay of 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    // UPDATED: Added w-full overflow-x-hidden and reduced vertical padding for mobile
    <section id="about" className="py-16 sm:py-24 bg-white w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* UPDATED: Reduced margin-bottom for mobile */}
        <header className="mb-12 sm:mb-16">
          <h1 className="font-great-vibes text-4xl md:text-7xl text-gray-800 mb-6">
            Celestial Celebrations
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* UPDATED: Reduced text size for mobile */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-serif">
            Celestial Celebrations is one of Kerala’s most admired names in event planning, known for turning moments into magical memories. What makes us stand apart is our dedication to our clients — we design every event around their dreams, priorities, and possibilities, ensuring that expectations always shine brighter than budgets.

            </p>
            {/* UPDATED: Reduced text size for mobile */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-serif">
             As passionate wedding and event planners, we take complete responsibility for every detail — from concept to creation. Whether it’s a serene celebration by the shores of Alappuzha or a grand affair in Kochi’s vibrant venues, we bring beauty, precision, and emotion to every element.

             With Celestial Celebrations, your occasion becomes more than an event — it becomes an experience that feels timeless, elegant, and truly celestial.
            </p>
          </div>
        </header>

        {/* --- NEW: Carousel Slider Section --- */}
        <main>
          <h2 className="font-great-vibes text-5xl md:text-6xl text-gray-800 mb-8">
            Our Latest Wedding
          </h2>
          
          {/* Carousel Container: Sets up the perspective area */}
          {/* UPDATED: Reduced height for mobile */}
          <div className="relative w-full max-w-2xl mx-auto h-48 sm:h-56 md:h-80 lg:h-[26rem]">
            {weddingImages.map((src, index) => {
              const prevIndex = (currentIndex - 1 + weddingImages.length) % weddingImages.length;
              const nextIndex = (currentIndex + 1) % weddingImages.length;

              let positionClasses = 'scale-50 opacity-0'; // Default for hidden slides

              if (index === currentIndex) {
                // The active slide in the center
                positionClasses = 'translate-x-0 scale-100 opacity-100 z-10';
              } else if (index === prevIndex) {
                // The previous slide, peeking from the left
                // UPDATED: Reduced translation on mobile to "tuck it in"
                positionClasses = '-translate-x-[60%] sm:-translate-x-[65%] scale-75 opacity-60 z-0';
              } else if (index === nextIndex) {
                // The next slide, peeking from the right
                // UPDATED: Reduced translation on mobile to "tuck it in"
                positionClasses = 'translate-x-[60%] sm:translate-x-[65%] scale-75 opacity-60 z-0';
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