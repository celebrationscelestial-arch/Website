import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; 
// import { Link } from 'react-router-dom'; // <-- REMOVED this import

// Load Google Fonts
const loadGoogleFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Great+Vibes&family=Pacifico&family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Load fonts when component mounts
    loadGoogleFonts();
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- MODIFIED navItems ---
  const navItems = [
    { name: 'Home', href: '#hero',type :'scroll'},
    { 
      name: 'About', 
      href: '#about',
      type :'scroll',
      // Added children for the dropdown
      children: [
        { name: 'Our Team', href: '#team', type: 'scroll' }
      ]
    },
    { name: 'Services', href: '/services',type :'page' },
    // { name: 'Team', href: '#team',type :'scroll' }, // <-- Removed standalone Team
    { name: 'Testimonials', href: '#testimonials',type :'scroll' },
    { name: 'Contact', href: '#contact',type :'scroll'},
  ];

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // --- MODIFIED renderNavItem (for Desktop) ---
  const renderNavItem = (item) => {
    // Base class string, added flex items-center and space-x-1
    const className = `px-6 py-3 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-full transform hover:scale-105 flex items-center space-x-1 ${
      isScrolled ? 'text-yellow-400 hover:text-white' : 'text-white hover:text-yellow-400'
    }`;
    
    // --- If item has children, render dropdown ---
    if (item.children) {
      return (
        <div key={item.name} className="relative group">
          {/* Main "About" button */}
          <button
            onClick={() => scrollToSection(item.href)}
            className={className}
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <span>{item.name}</span>
            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48
                        bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden
                        invisible opacity-0 transform -translate-y-2 
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-in-out z-50`}
          >
            {item.children.map((child) => {
              // Render the child item ("Our Team")
              const childClassName = `block w-full text-left px-5 py-3 text-sm transition-all duration-300 ${
                isScrolled ? 'text-yellow-400 hover:text-white' : 'text-white hover:text-yellow-400'
              } hover:bg-white/10`;

              // --- FIXED: Replaced Link with <a> ---
              if (child.type === 'page') {
                return (
                  <a
                    key={child.name}
                    href={child.href} // <-- Changed from 'to'
                    className={childClassName}
                    style={{ fontFamily: 'Cinzel, serif' }}
                    // onClick is not needed for desktop dropdown link
                  >
                    {child.name}
                  </a>
                );
              }
              return (
                <button
                  key={child.name}
                  onClick={() => scrollToSection(child.href)}
                  className={childClassName}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {child.name}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    
    // --- If no children, render as normal ---
    // --- FIXED: Replaced Link with <a> ---
    if (item.type === 'page') {
      return (
        <a
          key={item.name}
          href={item.href} // <-- Changed from 'to'
          // Removed flex/items-center/space-x-1 from here as it's now on the base className
          className={className.replace("flex items-center space-x-1", "")} 
          style={{ fontFamily: 'Cinzel, serif' }}
          // onClick is not needed for desktop link
        >
          {item.name}
        </a>
      );
    }

    // It renders a <button> for scroll navigation
    return (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        // Removed flex/items-center/space-x-1 from here as it's now on the base className
        className={className.replace("flex items-center space-x-1", "")}
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        {item.name}
      </button>
    );
  };
  
  // Helper function to render a MOBILE nav item
  const renderMobileNavItem = (item) => {
    const className = "block w-full text-left text-white hover:text-yellow-400 px-4 py-3 text-lg font-medium transition-all duration-300 hover:bg-white/10 rounded-lg";
    
    // --- FIXED: Replaced Link with <a> ---
    if (item.type === 'page') {
      return (
        <a
          key={item.name}
          href={item.href} // <-- Changed from 'to'
          className={className}
          style={{ fontFamily: 'Cinzel, serif' }}
          onClick={() => setIsMenuOpen(false)} // <-- Kept this for mobile
        >
          {item.name}
        </a>
      );
    }

    return (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className={className}
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        {item.name}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-lg shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className={`flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-24' : 'h-36'}`}>
            
            {/* Left Navigation - 40% */}
            <div className="flex-1 max-w-[40%]">
              <div className="flex items-center justify-start space-x-8">
                {/* This map function now handles dropdowns */}
                {leftNavItems.map((item) => renderNavItem(item))}
              </div>
            </div>

            {/* Center Logo - 20% */}
            <div
              className={`flex-1 transition-all duration-700 overflow-hidden ${
                isScrolled ? 'max-w-0 opacity-0' : 'max-w-[20%] opacity-100'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <img
                    src="logo4.png"
                    alt="Celestial Celebrations Logo"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
                <h1 className="mt-3 text-l font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent tracking-wide whitespace-nowErap" style={{ fontFamily: 'Cinzel, serif' }}>
                  Celestial Celebrations
                </h1>
              </div>
            </div>

            {/* Right Navigation - 40% */}
            <div className="flex-1 max-w-[40%]">
              <div className="flex items-center justify-end space-x-8">
                {/* This map function now handles dropdowns */}
                {rightNavItems.map((item) => renderNavItem(item))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile Logo */}
            <div className="flex flex-col items-center">
              <img
                src="logo2.png"
                alt="Celestial Celebrations Logo"
                className="w-12 h-12 object-contain rounded-full"
              />
              <span className="text-sm font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mt-1" style={{ fontFamily: 'Cinzel, serif' }}>
                Celestial Celebrations
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-yellow-400 hover:text-white' : 'text-white hover:text-yellow-400'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl">
              <div className="px-4 py-6 space-y-4">
                {/* --- MODIFIED Mobile Menu --- */}
                {/* Use flatMap to list parent and child links separately */}
                {navItems.flatMap(item => item.children ? [item, ...item.children] : [item]).map((item) => renderMobileNavItem(item))}
                
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold mt-6 transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

