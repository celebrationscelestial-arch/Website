import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- WhatsApp Button Component ---
// This component can be moved to its own file in the components folder if you prefer.
const WhatsAppButton = () => {
  // IMPORTANT: Replace this with your WhatsApp Business phone number, including the country code without the '+'.
  const phoneNumber = '+918590322358'; 
  
  // Optional: A pre-filled message that users can send.
  const message = encodeURIComponent("Hello! I'm interested in your event planning services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50  p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Replaced the SVG with an IMG tag for your logo */}
      <img
        src="/whatsapp.jpg" // IMPORTANT: Place your 'whatsapp.jpg' file in the 'public' folder of your project for this path to work.
        alt="Chat on WhatsApp"
        className="w-12 h-12 rounded-full p"
      />
    </a>
  );
};


function App() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* The WhatsApp button is placed here so it floats over all other components. */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

