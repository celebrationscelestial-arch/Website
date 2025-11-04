import React from 'react';

// --- STYLING ---
const styles = {
  servicesContainer: {
    fontFamily: "'Inter', sans-serif", // Base font set to Inter
    backgroundImage: "url('bg1.jpg')", // Specific background for services page
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh', // Ensure it covers the full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the top
    padding: '80px 5%', // Add padding around the white container
  },
  whiteContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    borderRadius: '12px',
    paddingTop:'80px',
    padding: '40px',
    maxWidth: '1400px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    marginTop: '40px', // Push it down a bit from the top
  },
  heading: {
    fontFamily: "'Playfair Display', serif", // Heading font set to Playfair Display
    fontSize: '3rem',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: '50px',
    color: '#333',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Set to exactly 3 columns per row
    gap: '30px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    },
  },
  serviceImage: {
    width: '100%',
    height: '200px', // Fixed height for images
    objectFit: 'cover',
    // Example gradient overlay for images if needed, currently off
    // background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
  },
  serviceContent: {
    padding: '20px',
    textAlign: 'center',
    flexGrow: 1, // Allows content to fill available space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    fontFamily: "'Playfair Display', serif", // Title font set to Playfair Display
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
    fontFamily: "'Inter', sans-serif", // Ensure description font is Inter
  },
};

// --- COMPONENTS ---

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div style={styles.serviceCard}>
    <img src={image} alt={title} style={styles.serviceImage} />
    <div style={styles.serviceContent}>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = () => {
  const servicesData = [
    {
      image: 'https://placehold.co/400x200/FFDDC1/E07C64?text=Invitations',
      title: 'Custom Invitation Design',
      description: 'Streamline your event planning with our bespoke invitation services. We craft unique and attractive invites tailored to your style, making the process effortless and enjoyable.',
    },
    {
      image: 'https://placehold.co/400x200/B2EBF2/00BCD4?text=Transport',
      title: 'Premium Transportation',
      description: 'Elevate your special occasion with our diverse transportation solutions. From luxury sedans to vintage classics, we provide seamless travel for weddings and corporate events.',
    },
    {
      image: 'https://placehold.co/400x200/DCE775/827717?text=Venue+Planning',
      title: 'Venue Planning & Decor',
      description: 'Confused about your event venue? Our expert team specializes in comprehensive venue planning and exquisite decoration, transforming any space into your dream setting with vibrant aesthetics.',
    },
    {
      image: 'https://placehold.co/400x200/FFCC80/FB8C00?text=Venue+Recce',
      title: 'Detailed Venue Recce',
      description: 'Every detail matters. We handle the intricate logistics of venue assessment, including precise placement of stages and props, allowing you to relax while we perfect the layout.',
    },
    {
      image: 'https://placehold.co/400x200/CFD8DC/546E7A?text=Add-on+Services',
      title: 'Essential Add-on Services',
      description: 'Benefit from our extensive network and swift assistance for immediate needs, such as securing permits for restricted or unique open-air venues, ensuring a smooth event execution.',
    },
    {
      image: 'https://placehold.co/400x200/A7FFEB/00BFA5?text=Venue+Design',
      title: 'Innovative Venue Design',
      description: 'Our award-winning team is renowned for creating flawless and innovative venue designs. We meticulously modify spaces to perfectly align with your vision, ensuring a truly unique experience.',
    },
    {
      image: 'https://placehold.co/400x200/D1C4E9/5E35B1?text=Technical',
      title: 'Robust Technical Support',
      description: 'Experience uninterrupted celebrations with our comprehensive technical assistance. We provide reliable light, sound, and power supply backups, guaranteeing continuous enjoyment for your guests.',
    },
    {
      image: 'https://placehold.co/400x200/FFE0B2/FF9800?text=Housekeeping',
      title: 'Dedicated Housekeeping & Reception',
      description: 'We treat your event as our own. Our professional housekeeping and reception teams ensure impeccable service, contributing significantly to a welcoming and well-managed atmosphere for all.',
    },
    {
      image: 'https://placehold.co/400x200/C8E6C9/4CAF50?text=Entertainment',
      title: 'Engaging Entertainment Solutions',
      description: 'Keep the party alive all night! Our expert team curates vibrant entertainment options, ensuring your guests are captivated and delighted from start to finish.',
    },
    {
      image: 'https://placehold.co/400x200/BBDEFB/2196F3?text=Bar+Management',
      title: 'Professional Bar Management',
      description: 'We handle all aspects of bar management, from setup to service, ensuring a smooth and sophisticated beverage experience that complements your event perfectly.',
    },
    {
      image: 'https://placehold.co/400x200/FFECB3/FFC107?text=Styling',
      title: 'Personal Styling Assistance',
      description: 'Enhance your personal elegance with our dedicated styling assistance. Our experts help bring out your inherent beauty and sophistication for your momentous occasion.',
    },
    {
      image: 'https://placehold.co/400x200/F8BBD0/E91E63?text=Hampers',
      title: 'Exquisite Wedding Hampers',
      description: 'Bid farewell to your guests with unforgettable wedding hampers. We meticulously craft and style petite gifts that serve as a perfect token of your appreciation.',
    },
    {
      image: 'https://placehold.co/400x200/B2DFDB/009688?text=Photo+Video',
      title: 'Captivating Photography & Videography',
      description: 'Preserve every cherished moment for eternity. Our skilled photographers and videographers are dedicated to capturing the essence and joy of your precious event.',
    },
    {
      image: 'https://placehold.co/400x200/CFD8DC/607D8B?text=Illumination',
      title: 'Dynamic Illumination Design',
      description: 'Our expert decorators manage every aspect of illumination, creating captivating lightscapes that enhance the ambiance and highlight the beauty of your event until the very last moment.',
    },
    {
      image: 'https://placehold.co/400x200/E1BEE7/9C27B0?text=Table+Service',
      title: 'Refined Table Services',
      description: 'Experience seamless dining with our professional table services. Whether for corporate events or weddings, we provide elegant and efficient table arrangements tailored to your needs.',
    },
    {
      image: 'https://placehold.co/400x200/DCEDC8/8BC34A?text=Guest+Engagements',
      title: 'Engaging Guest Experiences',
      description: 'We specialize in ensuring your guests remain delighted and fully engaged throughout the event, crafting memorable interactions that leave a lasting positive impression.',
    },
  ];

  return (
    <div style={styles.servicesContainer}>
      <div style={styles.whiteContainer}>
        <h2 style={styles.heading}>Services</h2>
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

