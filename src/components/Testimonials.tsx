import React, { useState, useEffect } from 'react';

// --- STYLING ---
// Style for the main h2 title, replicating the 'Portfolio' text style
const titleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '3rem', // Base size, will be responsive with classes
  fontWeight: 400,
  color: 'white',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  marginBottom: '1rem',
};


// --- DATA ---
const testimonials = [
  {
    name: 'Ajith and Reshma ',
    event: 'Wedding Reception',
    image: 'ajith.jpeg',
    text: '“Our reception by the Alappuzha backwaters was straight out of a postcard. Celestial Celebrations designed an ambience with fairy lights, soft music, and elegant table settings that left our guests mesmerized. The entire event ran smoothly, and we didn’t have to worry about a thing.”',
  },
  {
    name: 'Devika and Sanju Krishna',
    event: 'Wedding',
    image: 'devikatest.jpeg',
    text: '“Choosing Celestial Celebrations was the best decision we made. Every ritual was handled with deep respect and flawless timing — from the traditional kuthuvala to the intimate reception — and the décor was nothing short of magical. Guests kept asking who planned it. Heartfelt thanks to the team for making our day perfect!”  ',
  },
  {
    name: 'Malini and Pradeep',
    event: 'Wedding',
    image: 'malini.jpeg',
    text: '“Our traditional Nair wedding in Thrissur was given a modern twist by Celestial Celebrations. The combination of brass lamps, banana leaf décor, and chic floral arrangements was stunning. The coordination between the catering, photographers, and musicians was seamless. We were free to just enjoy the rituals without stress."',
  },
  {
    name: 'Sona & Anoop',
    event: 'Marriage',
    image: 'sona.jpeg',
    text: '“Our hill-station wedding in Munnar was a dream. The décor was minimal yet breathtaking, perfectly matching the misty surroundings. The team ensured smooth coordination with the resort and vendors, making it stress-free for us. Guests still say it was one of the most serene weddings they’ve attended.”',
  },
  {
    name: 'Robin and Jasmine',
    event: 'Wedding',
    image: 'robintes.jpg',
    text: '“They are very easy to work with. They did an incredible job. My experience with Celestial was amazing — I didn’t even know such a young, skillful set of people could pull off something so incredible. They are very committed to their work, and it shows.We celebrated with friends and family, and through the whole process they did an incredible job. The venue looked amazing, and I highly, highly recommend them. If you’re getting married, contact these people — they’ll work out everything for you.”',
  },
];


// --- COMPONENT --- 
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      // UPDATED: Added w-full overflow-x-hidden and adjusted padding for mobile
      className="min-h-screen w-full overflow-x-hidden flex items-center justify-center py-12 sm:py-20 px-2 sm:px-4"
      style={{
        // Changed the gradient from light to dark to make the white text pop
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('testimonial.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* UPDATED: Added responsive text size classes to override style */}
          <h2 style={titleStyle} className="text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            // UPDATED: Pulled buttons in on mobile (-translate-x-4), kept desktop at lg:-translate-x-12. Reduced size on mobile.
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-amber-700 text-amber-700 flex items-center justify-center text-2xl hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            // UPDATED: Pulled buttons in on mobile (translate-x-4), kept desktop at lg:translate-x-12. Reduced size on mobile.
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-amber-700 text-amber-700 flex items-center justify-center text-2xl hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            ›
          </button>

          {/* Testimonial Card */}
          {/* UPDATED: Reduced padding and min-height for mobile */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 min-h-[450px] md:min-h-[500px] flex flex-col items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              // UPDATED: Reduced image size for mobile
              className="w-24 h-24 md:w-40 md:h-40 rounded-lg object-cover shadow-lg mb-4 md:mb-6"
            />
            
            {/* UPDATED: Reduced text size and margin */}
            <div className="text-4xl md:text-6xl text-amber-700 mb-2 md:mb-4" style={{ fontFamily: 'serif' }}></div>
            
            {/* UPDATED: Reduced text size and margin */}
            <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed mb-6 md:mb-8 max-w-2xl">
              {testimonials[currentIndex].text}
            </p>
            
            {/* UPDATED: Reduced text size */}
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            
            <p className="text-sm text-gray-600 mt-1">
              {testimonials[currentIndex].event}
            </p>
          </div>

          {/* Dots Navigation */}
          {/* UPDATED: Reduced margin-top */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-6 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}