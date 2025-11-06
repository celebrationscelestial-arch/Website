import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- WhatsApp Button Component ---
// This component now manages its own open/closed state.
const WhatsAppButton = () => {
  // --- STATE ---
  // State to control if the widget is open or closed. Default is false (closed).
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // --- SETTINGS ---
  // Your original phone number and message
  const phoneNumber = '+918590322358';
  const message = encodeURIComponent("Hello! I'm interested in your event planning services.");

  // --- HANDLERS ---
  // Function to open the widget
  const handleOpenWidget = () => {
    setIsWidgetOpen(true);
  };

  // Function to close the widget
  const handleCloseWidget = () => { // <-- FIXED THE TYPO HERE
    setIsWidgetOpen(false);
  };

  // --- RENDER LOGIC ---
  return (
    <>
      {/* SECTION 1: THE FLOATING ICON (Your original button)
        This is only shown if the widget is CLOSED (isWidgetOpen is false)
      */}
      {!isWidgetOpen && (
        <button
          onClick={handleOpenWidget}
          type="button"
          className="fixed bottom-6 right-6 z-50  p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-300 ease-in-out hover:scale-110"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Your original IMG tag */}
          <img
            src="/whatsapp.jpg"
            alt="Chat on WhatsApp"
            className="w-12 h-12 rounded-full p" // Kept your original 'p' class
          />
        </button>
      )}

      {/* SECTION 2: THE FULL CHAT WIDGET
        This is only shown if the widget is OPEN (isWidgetOpen is true)
      */}
      {isWidgetOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-80 rounded-lg shadow-2xl"
          aria-label="Chat with us on WhatsApp"
        >
          {/* 1. Widget Header */}
          <div className="bg-[#075E54] text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/whatsapp.jpg" // Using your existing image path
                alt="WhatsApp"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="font-bold text-lg">WhatsApp</span>
            </div>
            <button
              onClick={handleCloseWidget} // <-- This closes the widget
              className="text-white text-3xl font-light leading-none hover:opacity-75"
              aria-label="Close chat widget"
            >
              &times;
            </button>
          </div>

          {/* 2. Chat Area (Body) */}
          <div className="bg-white p-4">
            {/* Chat Bubble */}
            <div className="bg-gray-100 p-3 rounded-lg relative mb-4 shadow-sm">
              <p className="text-sm text-gray-800">
                Hello ???? <br />
                Can we help you ?
              </p>
              {/* Bubble tail */}
              <div className="absolute left-3 -bottom-2 w-0 h-0 border-t-[10px] border-t-gray-100 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"></div>
            </div>

            {/* 3. Open Chat Button (The actual link) */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3 px-4 rounded-full w-full text-center hover:bg-green-700 transition-colors"
            >
              {/* Simple inline SVG chat icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Open chat</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

// --- Your Original App Component (Unchanged) ---
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