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
    backgroundImage: "url('services.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // "Services" text in the hero
  heroText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '5rem',
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 4px 10px rgba(0,0,0,0.5)', // Adds readability
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
    marginTop: '-80px', // Pulls it up to overlap the hero slightly (optional, but looks good)
    position: 'relative', // Needed for stacking context
    zIndex: 2, // Ensure it's above the hero
  },
  // Grid layout for the cards
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Set to exactly 3 columns per row
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
    color: '#444',
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

// Service Card Component (No changes needed)
const ServiceCard = ({ image, title, description }) => (
  // Applying hover effect via inline styles is tricky.
  // For a real app, this should be done with CSS or a CSS-in-JS library.
  // I'm keeping the base style from your original 'styles.serviceCard'.
  <div style={styles.serviceCard}
       onMouseEnter={(e) => {
         e.currentTarget.style.transform = 'translateY(-5px)';
         e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
       }}
       onMouseLeave={(e) => {
         e.currentTarget.style.transform = 'translateY(0)';
         e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
       }}>
    <img src={image} alt={title} style={styles.serviceImage} />
    <div style={styles.serviceContent}>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = () => {
  // Updated image paths as requested
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

  return (
    <div style={styles.servicesPageContainer}>
      {/* 1. Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroText}>Services</h1>
      </div>

      {/* 2. Services Grid Section */}
      <div style={styles.servicesGridContainer}>
        {/* The 'Services' h2 heading is removed as it's now in the hero */}
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