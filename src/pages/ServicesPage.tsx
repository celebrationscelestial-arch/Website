import React from 'react';

// --- Service Data (from your original file) ---
const servicesData = [
  { image: 'custom-invitation-design.jpeg', title: 'Custom Invitation Design', description: 'Streamline your event planning with our bespoke invitation services. We craft unique and attractive invites tailored to your style, making the process effortless and enjoyable.' },
  { image: 'premium-transportation.jpeg', title: 'Premium Transportation', description: 'Elevate your special occasion with our diverse transportation solutions. From luxury sedans to vintage classics, we provide seamless travel for weddings and corporate events.' },
  { image: 'venue-planning-decor.jpeg', title: 'Venue Planning & Decor', description: 'Confused about your event venue? Our expert team specializes in comprehensive venue planning and exquisite decoration, transforming any space into your dream setting with vibrant aesthetics.' },
  { image: 'detailed-venue-recce.jpeg', title: 'Detailed Venue Recce', description: 'Every detail matters. We handle the intricate logistics of venue assessment, including precise placement of stages and props, allowing you to relax while we perfect the layout.' },
  { image: 'essential-add-on-services.jpeg', title: 'Essential Add-on Services', description: 'Benefit from our extensive network and swift assistance for immediate needs, such as securing permits for restricted or unique open-air venues, ensuring a smooth event execution.' },
  { image: 'innovative-venue-design.jpeg', title: 'Innovative Venue Design', description: 'Our award-winning team is renowned for creating flawless and innovative venue designs. We meticulously modify spaces to perfectly align with your vision, ensuring a truly unique experience.' },
  { image: 'robust-technical-support.jpeg', title: 'Robust Technical Support', description: 'Experience uninterrupted celebrations with our comprehensive technical assistance. We provide reliable light, sound, and power supply backups, guaranteeing continuous enjoyment for your guests.' },
  { image: 'dedicated-housekeeping-reception.jpeg', title: 'Dedicated Housekeeping & Reception', description: 'We treat your event as our own. Our professional housekeeping and reception teams ensure impeccable service, contributing significantly to a welcoming and well-managed atmosphere for all.' },
  { image: 'engaging-entertainment-solutions.jpeg', title: 'Engaging Entertainment Solutions', description: 'Keep the party alive all night! Our expert team curates vibrant entertainment options, ensuring your guests are captivated and delighted from start to finish.' },
  { image: 'professional-bar-management.jpeg', title: 'Professional Bar Management', description: 'We handle all aspects of bar management, from setup to service, ensuring a smooth and sophisticated beverage experience that complements your event perfectly.' },
  { image: 'personal-styling-assistance.jpeg', title: 'Personal Styling Assistance', description: 'Enhance your personal elegance with our dedicated styling assistance. Our experts help bring out your inherent beauty and sophistication for your momentous occasion.' },
  { image: 'exquisite-wedding-hampers.jpeg', title: 'Exquisite Wedding Hampers', description: 'Bid farewell to your guests with unforgettable wedding hampers. We meticulously craft and style petite gifts that serve as a perfect token of your appreciation.' },
  { image: 'captivating-photography-videography.jpeg', title: 'Captivating Photography & Videography', description: 'Preserve every cherished moment for eternity. Our skilled photographers and videographers are dedicated to capturing the essence and joy of your precious event.' },
  { image: 'dynamic-illumination-design.jpeg', title: 'Dynamic Illumination Design', description: 'Our expert decorators manage every aspect of illumination, creating captivating lightscapes that enhance the ambiance and highlight the beauty of your event until the very last moment.' },
  { image: 'refined-table-services.jpeg', title: 'Refined Table Services', description: 'Experience seamless dining with our professional table services. Whether for corporate events or weddings, we provide elegant and efficient table arrangements tailored to your needs.' },
  { image: 'engaging-guest-experiences.jpeg', title: 'Engaging Guest Experiences', description: 'We specialize in ensuring your guests remain delighted and fully engaged throughout the event, crafting memorable interactions that leave a lasting positive impression.' },
];


const ServicesPage = () => {
  return (
    // Section container, just like team.tsx
    <section id="services" className="bg-white" >
      
      {/* === HEADER (Copied from team.tsx and content adapted) === */}
      <header 
        className="relative h-[65vh] overflow-hidden"
        style={{ 
          // Using the image from your original services.tsx
          backgroundImage: "url('services.jpeg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Kept parallax effect
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered Text Container */}
        <div className="relative max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
          <h1 className="font-great-vibes text-5xl md:text-7xl text-white mb-6">
            Our Exquisite Services
          </h1>
          <div className="max-w-3xl mx-auto">
            {/* Using the quote from your original services.tsx */}
            <p className="text-lg text-gray-200 leading-relaxed font-serif">
              &ldquo;Crafting your vision into an unforgettable reality. We handle the details, you live the moment.&rdquo;
            </p>

            {/* Decorative Lines (from team.tsx) */}
            <div className="flex flex-col items-center mt-6">
              <div className="w-24 h-0.5 bg-gray-300 opacity-75"></div>
              <div className="w-16 h-0.5 bg-gray-300 opacity-75 mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      {/* === END OF HEADER === */}


      {/* --- Services Grid Section --- */}
      <main className="py-24">
        {/* Container (from team.tsx) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid (from team.tsx, but with lg:grid-cols-3 for more cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {servicesData.map((service, index) => (
              // --- New Tailwind Service Card ---
              <div 
                key={index} 
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                {/* Service Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 object-cover" 
                />
                
                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-gray-800 font-medium mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 font-serif leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
              // --- End of New Card ---
            ))}

          </div>
        </div>
      </main>

    </section>
  );
};

export default ServicesPage;