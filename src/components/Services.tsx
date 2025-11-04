import React from 'react';

// --- STYLING ---
// Styles are updated for the new layout with square boxes and text.
const styles = {
  // Style for the main container that holds the background image
  appContainer: {
    fontFamily: "'Inter', sans-serif",
    // IMPORTANT: Change this URL to your desired background image.
    backgroundImage: "url('bg1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This keeps the background still when you scroll
  },
  // Style for the top transparent hero section
  hero: {
    height: '50vh', // Set to 50% of the viewport height
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    // This creates the semi-transparent black overlay.
    // Change the last number (0.5) to adjust transparency.
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    textAlign: 'center',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  // Style for the text title below each image
  h3: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: 0,
    color: '#333',
  },
  exploreButton: {
    display: 'inline-block',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid white',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  // Style for the gallery, which has a solid background
  gallery: {
    padding: '80px 5%',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#FDFBF8', // Solid off-white background
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // This now sets exactly 3 columns
    gap: '25px',
  },
  // New style for the grid item container (holds image and text)
  gridItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
  },
  // Updated style for the image itself (now square)
  gridItemImg: {
    width: '100%',
    aspectRatio: '1 / 1', // This makes the image square
    display: 'block',
    objectFit: 'cover',
  },
  // New style for the text content area below the image
  gridItemText: {
    padding: '16px',
    textAlign: 'center',
  },
};

// --- COMPONENTS ---

// Hero Component for the top banner
const Hero = () => (
  <header style={styles.hero}>
    <div style={styles.heroContent}>
      <h1 style={styles.h1}>Portfolio</h1>
      <a href="#portfolio" style={styles.exploreButton}>
        Explore More →
      </a>
    </div>
  </header>
);

// Gallery Component for the photo grid
const Gallery = () => {
  // Updated image data with titles and placeholder images
  const galleryImages = [
    { src: 'portfolio7.JPG', alt: 'Wedding stage with pink and gold theme',  },
    { src: 'portfolio2.jpeg', alt: 'Elegant white wedding stage decor',  },
    { src: 'portfolio3.jpg', alt: 'Ceiling decor with flowers and lights', },
    { src: 'portfolio4.jpeg', alt: 'Outdoor event seating arrangement', },
    { src: 'portfolio5.jpeg', alt: 'Elegant dinner table setup',  },
    { src: 'portfolio6.jpg', alt: 'Outdoor wedding ceremony arch',  },8
  ];

  return (
    <main style={styles.gallery} id="gallery">
      <div style={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          // Each grid item is now a container for the image and text
          <div key={index} style={styles.gridItem} className="grid-item">
            <img src={image.src} alt={image.alt} style={styles.gridItemImg} />
            {/* Text container below the image */}
            <div style={styles.gridItemText}>
              <h3 style={styles.h3}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

// Main App Component that brings everything together
function App() {
  return (
    <div style={styles.appContainer}>
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;

