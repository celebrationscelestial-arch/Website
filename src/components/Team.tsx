import React from 'react';

// The main component for the "Why Choose Us" section
const App = () => {
  // Data for the feature cards
  const features = [
    {
      title: 'Unforgettable Events by Top Planners',
      description: 'We craft bespoke events that reflect your unique style, ensuring every detail is flawlessly executed for a truly memorable occasion.',
      image: 'carousel2.jpg',
    },
    {
      title: 'Seamless Event Management Solutions',
      description: 'Our philosophy is one of continuous improvement, leveraging innovative solutions to make every event better than the last.',
      image: 'seamless.jpg',
    },
    {
      title: 'Exceptional Experiences Delivered',
      description: 'From grand weddings to intimate gatherings, our passion is creating exceptional experiences that you and your guests will cherish forever.',
      image: 'exceptional.jpg',
    }
  ];
  
  // Different background colors for each card to create a distinct stacking look, using your theme
  const cardBackgrounds = [
    'bg-white',
    'bg-slate-50',
    'bg-white',
  ];

  return (
    // The main section now has a background image. 
    // IMPORTANT: Replace '/event-background.jpg' with the path to your image.
    <section 
      id="why-choose-us" 
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('bg2.jpeg')" }}
    >
      
      {/* 1. Initial Header View */}
      <div className="min-h-[75vh] flex flex-col justify-center items-center text-center p-4 relative">
        {/* The decorative blurs are removed as they conflict with a background image. */}
        {/* You can re-add them if you like the effect. */}
        
        {/* Added a "frosted glass" container for text readability */}
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800">
                Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full my-6"></div>
            <p className="text-xl font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your vision is our mission. We bring expertise, creativity, and dedication to every event.
            </p>
            <div className="mt-12 text-gray-500 flex flex-col items-center gap-2">
    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
      </div>

      {/* 2. Sticky Scrolling Container */}
      {/* This container holds the cards that will stack on top of each other */}
      <div className="relative">
        {features.map((feature, index) => (
          // Each card is set to 'sticky' and will stick to the top of the viewport when scrolled to.
          <div key={index} className="sticky top-0 h-screen w-full">
            <div className={`h-full w-full flex items-center justify-center p-8 lg:p-16 ${cardBackgrounds[index % cardBackgrounds.length]}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                
                {/* Image container - alternates position based on index */}
                <div className={`w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Text content container - alternates position based on index, using your theme's fonts/colors */}
                <div className={`text-gray-800 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-800">{feature.title}</h3>
                  <p className="text-lg lg:text-xl font-sans text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;