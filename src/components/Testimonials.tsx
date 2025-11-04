import React, { useState, useEffect } from 'react';

// --- STYLING ---
// Style for the main h2 title, replicating the 'Portfolio' text style
const titleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '3rem',
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
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        // Changed the gradient from light to dark to make the white text pop
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('testimonial.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Applied the new styling here, removed conflicting Tailwind classes */}
          <h2 style={titleStyle}>
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-amber-700 text-amber-700 flex items-center justify-center text-2xl hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-amber-700 text-amber-700 flex items-center justify-center text-2xl hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            ›
          </button>

          {/* Testimonial Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 min-h-[500px] flex flex-col items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-40 h-40 rounded-lg object-cover shadow-lg mb-6"
            />
            
            <div className="text-6xl text-amber-700 mb-4" style={{ fontFamily: 'serif' }}></div>
            
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8 max-w-2xl">
              {testimonials[currentIndex].text}
            </p>
            
            <h3 className="text-xl font-bold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            
            <p className="text-sm text-gray-600 mt-1">
              {testimonials[currentIndex].event}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
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
