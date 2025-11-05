import React from 'react';
import { Calendar, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const services = [
    'Luxury Weddings',
    'Corporate Events',
    'Private Celebrations',
    'Floral & Decor',
    'Catering Services',
    'Photography & Video'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Meet the Team', href: '#team' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-divine-gradient text-white relative overflow-hidden w-full overflow-x-hidden"> {/* UPDATED: Added w-full overflow-x-hidden */}
      {/* Divine background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-divine-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* UPDATED: Reduced padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* UPDATED: Reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          
          {/* Company Info */}
          {/* UPDATED: Reduced space-y */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-great-vibes text-divine-gold">Celestial Celebrations</span>
            </div>
            <p className="text-sm text-gray-300 font-inter leading-relaxed">
              Creating extraordinary celebrations and unforgettable moments since 2015. Your vision is our passion, and your satisfaction is our guarantee.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1BixQhY4LA/"
                className="bg-charcoal hover:bg-gold-gradient rounded-full p-2 sm:p-3 transition-all duration-500 hover:shadow-divine group transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-deep-black" />
              </a>
              <a
                href="https://www.instagram.com/celestialcelebrationsevent?igsh=MTgwdmc0cGhtM28zcg=="
                className="bg-charcoal hover:bg-gold-gradient rounded-full p-2 sm:p-3 transition-all duration-500 hover:shadow-divine group transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-deep-black" />
              </a>
              <a
                href="https://www.linkedin.com/company/celestial-celebrations/"
                className="bg-charcoal hover:bg-gold-gradient rounded-full p-2 sm:p-3 transition-all duration-500 hover:shadow-divine group transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-deep-black" />
              </a>
            </div>
          </div>

          {/* Services */}
          {/* UPDATED: Reduced space-y */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-dancing font-bold text-divine-gold">Our Services</h3>
            {/* UPDATED: Reduced space-y */}
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-sm sm:text-base text-gray-300 hover:text-divine-gold transition-colors duration-500 cursor-pointer font-inter hover:underline inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          {/* UPDATED: Reduced space-y */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-dancing font-bold text-divine-gold">Quick Links</h3>
            {/* UPDATED: Reduced space-y */}
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm sm:text-base text-gray-300 hover:text-divine-gold transition-colors duration-500 text-left font-inter hover:underline mx-auto md:mx-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* UPDATED: Reduced space-y */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-dancing font-bold text-divine-gold">Contact Info</h3>
            {/* UPDATED: Reduced space-y */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-divine-gold mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-300 font-inter">
                  <p>Pathadipalam,</p>
                  <p>Thykkavu, Edappally, Kochi</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-divine-gold flex-shrink-0" />
                <a
                  href="tel:+91 8590926668"
                  className="text-sm sm:text-base text-gray-300 hover:text-divine-gold transition-colors duration-500 font-inter hover:underline"
                >
                  +91 8590926668
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-divine-gold flex-shrink-0" />
                <a
                  href="mailto:hello@luxeevents.com"
                  className="text-sm sm:text-base text-gray-300 hover:text-divine-gold transition-colors duration-500 font-inter hover:underline"
                >
                  celebrationscelestial@gmail.com
                </a>
              </div>
            </div>
            
           
          </div>
        </div>

       

        {/* Bottom Bar */}
        {/* UPDATED: Reduced margin and padding */}
        <div className="border-t border-divine-gold/30 mt-10 pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* UPDATED: Reduced text size */}
            <div className="text-xs sm:text-sm text-gray-300 font-inter text-center md:text-left">
              © 2025 Celestial Celebrations. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300 font-inter">
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;