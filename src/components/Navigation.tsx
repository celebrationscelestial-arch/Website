import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  // --- MODIFICATION: Updated navItems array ---
  const navItems = [
    { name: 'Home', href: '#hero', type: 'scroll' },
    {
      name: 'About',
      type: 'dropdown', // New type for the dropdown
      items: [
        { name: 'Team', href: '/team', type: 'page' },
        // You could add more items here later, e.g.:
        // { name: 'Our Story', href: '/story', type: 'page' },
      ],
    },
    { name: 'Services', href: '/services', type: 'page' },
    { name: 'Venue', href: '#venue', type: 'scroll' },
    { name: 'Wedding Planner', href: '#blod', type: 'page' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];
  // --- END MODIFICATION ---

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  // --- MODIFICATION: Made flatMap more explicit ---
  // Mobile doesn't have hover, so we flatten the dropdown
  const mobileNavItems = navItems.flatMap(item =>
    item.type === 'dropdown' ? item.items : [item] // Wrap single item in an array
  );
  // --- END MODIFICATION ---

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // --- MODIFICATION: Updated renderNavItem to handle dropdowns ---
  // Helper function to render a nav item
  const renderNavItem = (item, isDropdownItem = false) => {
    // Base classes
    // --- MODIFICATION: Removed baseStyle variable ---
    const baseClassName = "transition-all duration-300 text-base font-medium";
    
    // Different styles for main nav vs. dropdown item
    const mainNavItemClassName = `px-6 py-3 hover:bg-white/10 rounded-full transform hover:scale-105 ${
      isScrolled ? 'text-yellow-400 hover:text-white' : 'text-white hover:text-yellow-400'
    }`;
    const dropdownItemClassName = `block w-full text-left px-4 py-3 rounded-md ${
      isScrolled ? 'text-yellow-400 hover:text-white' : 'text-white hover:text-yellow-400'
    } hover:bg-white/20`;

    const className = isDropdownItem ? dropdownItemClassName : mainNavItemClassName;
    
    if (item.type === 'page') {
      // It renders a <Link> for page navigation
      return (
        <Link
          key={item.name}
          to={item.href} // 'to' prop is used instead of 'href'
          className={className}
          style={{ fontFamily: 'Cinzel, serif' }} // --- MODIFICATION: Inlined style ---
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    if (item.type === 'scroll') {
      // It renders a <button> for scroll navigation
      return (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={className}
          style={{ fontFamily: 'Cinzel, serif' }} // --- MODIFICATION: Inlined style ---
        >
          {item.name}
        </button>
      );
    }
    
    if (item.type === 'dropdown' && !isDropdownItem) {
      // This is the main "About" trigger
      return (
        <div key={item.name} className="relative group">
          {/* This is the "About" button that triggers the hover */}
          <button
            className={mainNavItemClassName} // Use main nav style
            style={{ fontFamily: 'Cinzel, serif' }} // --- MODIFICATION: Inlined style ---
          >
            {item.name}
            {/* You could add a dropdown icon here if you like */}
            {/* <ChevronDown size={16} className="inline ml-1" /> */}
          </button>
          
          {/* The Dropdown Menu */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white backdrop-blur-lg rounded-lg shadow-xl border border-white/10 hidden group-hover:block transition-all duration-300 z-50 text-black">
            <div className="p-2">
              {item.items.map((subItem) => (
                // Render sub-items with dropdown styling
                renderNavItem(subItem, true) 
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    return null; // Should not be reached
  };
  // --- END MODIFICATION ---

  // --- MODIFICATION: Made mobile renderer more robust ---
  // Helper function to render a MOBILE nav item
  const renderMobileNavItem = (item) => {
    const className = "block w-full text-left text-white hover:text-yellow-400 px-4 py-3 text-lg font-medium transition-all duration-300 hover:bg-white/10 rounded-lg";
    
    if (item.type === 'page') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={className}
          style={{ fontFamily: 'Cinzel, serif' }} // --- MODIFICATION: Inlined style ---
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    if (item.type === 'scroll') {
      return (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={className}
          style={{ fontFamily: 'Cinzel, serif' }} // --- MODIFICATION: Inlined style ---
        >
          {item.name}
        </button>
      );
    }
    
    // This should not happen if flatMap is correct, but good to have a fallback
    console.warn("Unknown mobile nav item type:", item);
    return null;
  };
  // --- END MODIFICATION ---

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
                {/* --- FIX IS HERE --- */}
                {leftNavItems.map((item) => renderNavItem(item, false))}
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
                <h1 className="mt-3 text-l font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent tracking-wide whitespace-nowrap" style={{ fontFamily: 'Cinzel, serif' }}>
                  Celestial Celebrations
                </h1>
              </div>
            </div>

            {/* Right Navigation - 40% */}
            <div className="flex-1 max-w-[40%]">
              <div className="flex items-center justify-end space-x-8">
                {/* --- FIX IS HERE --- */}
                {rightNavItems.map((item) => renderNavItem(item, false))}
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
              // MODIFICATION HERE
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
                {/* --- MODIFICATION: Use flattened items --- */}
                {mobileNavItems.map((item) => renderMobileNavItem(item))}
                {/* --- END MODIFICATION --- */}
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

