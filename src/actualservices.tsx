import React from 'react';

// --- STYLING ---
const styles = {
  // Main container for the entire page
  servicesPageContainer: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#fff', // Normal white background
  },
  // Hero section for the top 50vh
  heroSection: {
    height: '50vh',
    // Using a placeholder for the background image
    backgroundImage: "url('services.jpg')", // Reverted to original
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // "Services" text in the hero
  heroText: {
    fontFamily: "'Great Vibes', serif",
    fontSize: '5rem',
    fontWeight: 300,
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 4px 10px #e2c12d', 
  },
  // White container for the services grid
  servicesGridContainer: {
    backgroundColor: '#fff', // Plain white background
    borderRadius: '12px',
    padding: '60px 5%', // Padding for the grid section
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto', // Center the container
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    marginTop: '-80px', // Pulls it up to overlap the hero slightly
    position: 'relative', // Needed for stacking context
    zIndex: 2, // Ensure it's above the hero
  },
  // Grid layout for the cards
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Reverted to 3 columns
    gap: '30px',
  },
  // Individual service card styling
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  serviceImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  serviceContent: {
    padding: '20px',
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#c7e22dff', // Reverted to original color
  },
  serviceDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '15px',
    fontFamily: "'Inter', sans-serif",
  },
};

// --- COMPONENTS ---

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div style={styles.serviceCard}
       onMouseEnter={(e) => {
         e.currentTarget.style.transform = 'translateY(-5px)';
         e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
       }}
       onMouseLeave={(e) => {
         e.currentTarget.style.transform = 'translateY(0)';
         e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
       }}>
    <img 
      src={image} 
      alt={title} 
      style={styles.serviceImage} 
      // Removed onError fallback
    />
    <div style={styles.serviceContent}>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = () => {
  // Reverted to original local image paths
  const servicesData = [
    {
      image: 'custom-invitation-design.jpeg',
      title: 'Custom Invitation Design',
      description: 'Streamline your event planning with our bespoke invitation services. We craft unique and attractive invites tailored to your style, making the process effortless and enjoyable.',
    },
    {
      image: 'premium-transportation.jpeg',
      title: 'Premium Transportation',
      description: 'Elevate your special occasion with our diverse transportation solutions. From luxury sedans to vintage classics, we provide seamless travel for weddings and corporate events.',
    },
    {
      image: 'venue-planning-decor.jpeg',
      title: 'Venue Planning & Decor',
      description: 'Confused about your event venue? Our expert team specializes in comprehensive venue planning and exquisite decoration, transforming any space into your dream setting with vibrant aesthetics.',
    },
    {
      image: 'detailed-venue-recce.jpeg',
      title: 'Detailed Venue Recce',
      description: 'Every detail matters. We handle the intricate logistics of venue assessment, including precise placement of stages and props, allowing you to relax while we perfect the layout.',
    },
    {
      image: 'essential-add-on-services.jpeg',
      title: 'Essential Add-on Services',
      description: 'Benefit from our extensive network and swift assistance for immediate needs, such as securing permits for restricted or unique open-air venues, ensuring a smooth event execution.',
    },
    {
      image: 'innovative-venue-design.jpeg',
      title: 'Innovative Venue Design',
      description: 'Our award-winning team is renowned for creating flawless and innovative venue designs. We meticulously modify spaces to perfectly align with your vision, ensuring a truly unique experience.',
    },
    {
      image: 'robust-technical-support.jpeg',
      title: 'Robust Technical Support',
      description: 'Experience uninterrupted celebrations with our comprehensive technical assistance. We provide reliable light, sound, and power supply backups, guaranteeing continuous enjoyment for your guests.',
    },
    {
      image: 'dedicated-housekeeping-reception.jpeg',
      title: 'Dedicated Housekeeping & Reception',
      description: 'We treat your event as our own. Our professional housekeeping and reception teams ensure impeccable service, contributing significantly to a welcoming and well-managed atmosphere for all.',
    },
    {
      image: 'engaging-entertainment-solutions.jpeg',
      title: 'Engaging Entertainment Solutions',
      description: 'Keep the party alive all night! Our expert team curates vibrant entertainment options, ensuring your guests are captivated and delighted from start to finish.',
    },
    {
      image: 'professional-bar-management.jpeg',
      title: 'Professional Bar Management',
      description: 'We handle all aspects of bar management, from setup to service, ensuring a smooth and sophisticated beverage experience that complements your event perfectly.',
    },
    {
      image: 'personal-styling-assistance.jpeg',
      title: 'Personal Styling Assistance',
      description: 'Enhance your personal elegance with our dedicated styling assistance. Our experts help bring out your inherent beauty and sophistication for your momentous occasion.',
    },
    {
      image: 'exquisite-wedding-hampers.jpeg',
      title: 'Exquisite Wedding Hampers',
      description: 'Bid farewell to your guests with unforgettable wedding hampers. We meticulously craft and style petite gifts that serve as a perfect token of your appreciation.',
    },
    {
      image: 'captivating-photography-videography.jpeg',
      title: 'Captivating Photography & Videography',
      description: 'Preserve every cherished moment for eternity. Our skilled photographers and videographers are dedicated to capturing the essence and joy of your precious event.',
    },
    {
      image: 'dynamic-illumination-design.jpeg',
      title: 'Dynamic Illumination Design',
      description: 'Our expert decorators manage every aspect of illumination, creating captivating lightscapes that enhance the ambiance and highlight the beauty of your event until the very last moment.',
    },
    {
      image: 'refined-table-services.jpeg',
      title: 'Refined Table Services',
      description: 'Experience seamless dining with our professional table services. Whether for corporate events or weddings, we provide elegant and efficient table arrangements tailored to your needs.',
    },
    {
      image: 'engaging-guest-experiences.jpeg',
      title: 'Engaging Guest Experiences',
      description: 'We specialize in ensuring your guests remain delighted and. fully engaged throughout the event, crafting memorable interactions that leave a lasting positive impression.',
    },
  ];

  // --- STYLES FOR THE INTRO SECTION ---
  const newStyles = {
    introSectionContainer: {
      textAlign: 'center',
      padding: '50px 20px 30px', // Adds space between hero and grid container
      backgroundColor: '#fff', // Matches page background
    },
    headingContainer: {
      display: 'inline-block', // Keeps underlines contained to the text width
      marginBottom: '25px', // Space between underlines and quote
    },
    servicesHeading: {
      fontSize: '2.8rem',
      color: '#000', // Black font as requested
      fontFamily: "'Playfair Display', serif", // <<< CHANGED as requested
      fontWeight: 600,
      margin: 0,
    },
    underline1: {
      height: '2px',
      width: '100%', // First line, matches heading width
      backgroundColor: '#000',
      margin: '8px auto 0', // 8px below text
    },
    underline2: {
      height: '2px',
      width: '70%', // Second line, "slightly smaller"
      backgroundColor: '#000',
      margin: '4px auto 0', // 4px below first line
    },
    quote: {
      fontSize: '1.5rem', // Slightly larger to fit the font
      fontFamily: "'Great Vibes', serif", // <<< CHANGED as requested
      color: '#555',
      fontStyle: 'italic',
      maxWidth: '700px',
      margin: '0 auto', // Center the quote
      lineHeight: '1.6',
      // Removed temporary yellow background
    }
  };
  // --- END OF NEW STYLES ---

  return (
    <div style={styles.servicesPageContainer}>
      {/* 1. Hero Section (Unchanged) */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroText}>Services</h1>
      </div>

      {/* --- NEWLY ADDED INTRO SECTION --- */}
      {/* This structure is correct and contains the typo fix (</p>) */}
      <div style={newStyles.introSectionContainer}>
        <div style={newStyles.headingContainer}>
          <h2 style={newStyles.servicesHeading}>Services</h2>
          <div style={newStyles.underline1}></div>
          <div style={newStyles.underline2}></div>
        </div>
        <p style={newStyles.quote}>
          "Crafting your vision into an unforgettable reality. We handle the details, you live the moment."
        </p>
      </div>
      {/* --- END OF NEWLY ADDED SECTION --- */}

      {/* 2. Services Grid Section */}
      <div style={styles.servicesGridContainer}>
        <div style={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

