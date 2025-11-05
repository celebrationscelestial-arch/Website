import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// --- FONT LOADER ---
// This component dynamically loads the necessary fonts from Google Fonts.
const FontLoader = () => {
  useEffect(() => {
    const fonts = [
      "Inter:wght@400;500;600;700",
      "Playfair+Display:ital,wght@0,400;0,700;1,400",
      "Dancing+Script:wght@400;700",
      "Great+Vibes"
    ];
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fonts.join('&family=')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; // This component doesn't render anything
};


// --- STYLING ---
// We define the font families here to be reused as inline styles.
const fontStyles = {
  inter: { fontFamily: "'Inter', sans-serif" },
  playfair: { fontFamily: "'Playfair Display', serif" },
  dancing: { fontFamily: "'Dancing Script', cursive" },
  greatVibes: { fontFamily: "'Great Vibes', cursive" },
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- WHATSAPP INTEGRATION LOGIC ---
    // This logic sends the DETAILED form data to WhatsApp.

    // 1. **IMPORTANT**: Your WhatsApp number including country code (without '+').
    const phoneNumber = '918590322358'; 

    // 2. Format the form data into a readable message.
    const message = `
*New Event Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Event Type:* ${formData.eventType}
*Preferred Date:* ${formData.eventDate || 'Not specified'}
*Guest Count:* ${formData.guestCount || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}

*Vision:*
${formData.message}
    `;

    // 3. Encode the message for the URL.
    const encodedMessage = encodeURIComponent(message);

    // 4. Create the WhatsApp URL.
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 5. Open WhatsApp in a new tab.
    window.open(whatsappURL, '_blank');

    // --- END OF WHATSAPP LOGIC ---

    // Show a confirmation message on your site.
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', eventType: '',
        eventDate: '', guestCount: '', budget: '', message: ''
      });
    }, 4000);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', content: '+91 85903 22358', subContent: 'Available 24/7 for urgent matters' },
    { icon: Mail, title: 'Email', content: 'celebrationscelestial@gmail.com', subContent: 'We will respond at the earliest' },
    { icon: MapPin, title: 'Office', content: 'Thykkavu, Edappally, Kochi', subContent: 'Kerala' },
  ];

  if (isSubmitted) {
    return (
      // UPDATED: Reduced padding further
      <section id="contact" className="py-12 sm:py-24 bg-white relative overflow-hidden w-full overflow-x-hidden"> {/* UPDATED: Added w-full overflow-x-hidden */}
        <FontLoader />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* UPDATED: Reduced space-y */}
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            {/* UPDATED: Reduced icon size and padding */}
            <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full p-5 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="h-10 w-10 sm:h-16 sm:w-16 text-black" />
            </div>
            {/* UPDATED: Reduced text size */}
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 italic" style={fontStyles.playfair}>Thank You!</h2>
            {/* UPDATED: Reduced text size */}
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed" style={fontStyles.inter}>
              We're opening WhatsApp for you. Please press "send" to confirm your inquiry.
            </p>
            <div className="bg-amber-50 rounded-2xl p-4 border border-yellow-300/50">
              <p className="text-gray-800 font-medium" style={fontStyles.inter}>
                We will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    // UPDATED: Reduced padding further
    <section id="contact" className="py-12 sm:py-24 bg-white relative overflow-hidden w-full overflow-x-hidden"> {/* UPDATED: Added w-full overflow-x-hidden */}
      <FontLoader />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPDATED: Reduced margin-bottom */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 lg:mb-16 relative z-10">
          <h2 className="font-bold text-gray-800">
            {/* UPDATED: Reduced text size */}
            <span className="text-4xl sm:text-6xl lg:text-7xl" style={fontStyles.playfair}>Let's Plan Your</span> 
            {/* UPDATED: Reduced text size */}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent text-5xl sm:text-7xl lg:text-8xl block" style={fontStyles.playfair}>Perfect Event</span>
          </h2>
          {/* UPDATED: Reduced text size */}
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={fontStyles.inter}>
            Ready to create something extraordinary? Get in touch with us and let's start planning your unforgettable celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* UPDATED: Reduced space-y */}
          <div className="space-y-4">
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  // UPDATED: Reduced padding
                  <div key={index} className="flex items-start space-x-4 p-5 sm:p-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl hover:shadow-xl transition-all duration-700 border-2 border-yellow-300/50 hover:border-yellow-400/80 transform hover:scale-105">
                    {/* UPDATED: Reduced padding */}
                    <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full p-3 sm:p-4 flex-shrink-0 shadow-md">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                    </div>
                    <div>
                      {/* UPDATED: Reduced text size */}
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1" style={fontStyles.playfair}>{info.title}</h4>
                      <p className="text-sm sm:text-base text-gray-800 font-semibold" style={fontStyles.inter}>{info.content}</p>
                      <p className="text-xs sm:text-sm text-gray-600" style={fontStyles.inter}>{info.subContent}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          
          </div>

          <div className="lg:col-span-2">
            {/* UPDATED: Reduced padding and gap */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-gradient-to-br from-white to-amber-50 rounded-3xl p-5 sm:p-8 shadow-xl border-2 border-yellow-300/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-800 mb-2" style={fontStyles.playfair}>Full Name *</label>
                  {/* UPDATED: Reduced padding */}
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border-2 border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-inner" placeholder="Your full name" style={fontStyles.inter} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-800 mb-2" style={fontStyles.playfair}>Email Address *</label>
                  {/* UPDATED: Reduced padding */}
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border-2 border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-inner" placeholder="your@email.com" style={fontStyles.inter} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-800 mb-2" style={fontStyles.playfair}>Phone Number</label>
                  {/* UPDATED: Reduced padding */}
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border-2 border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-inner" placeholder="" style={fontStyles.inter} />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm sm:text-base font-semibold text-gray-800 mb-2" style={fontStyles.playfair}>Event Type *</label>
                  {/* UPDATED: Reduced padding */}
                  <select id="eventType" name="eventType" required value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border-2 border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-inner" style={fontStyles.inter}>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="gala">Gala/Fundraiser</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2" style={fontStyles.inter}>Preferred Event Date</label>
                    <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm" style={fontStyles.inter} />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2" style={fontStyles.inter}>Expected Guest Count</label>
                    <select id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm" style={fontStyles.inter}>
                      <option value="">Select guest count</option>
                      <option value="under-50">100-200</option>
                      <option value="50-100">300-500</option>
                      <option value="100-200">500-1000</option>
                      <option value="200-500">Above 1000</option>
                    </select>
                  </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2" style={fontStyles.inter}>Estimated Budget</label>
                <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm" style={fontStyles.inter}>
                  <option value="">Select budget range</option>
                  <option value="above1.5">Above 1.5L</option>
                  <option value="2to3">2L-3L</option>
                  <option value="3to5">3L - 5L</option>
                  {/* FIX: Changed </options> to </option> */}
                  <option value="5to8">5L-8L</option>
                  <option value="abvove8">Above 8L</option>
               
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2" style={fontStyles.inter}>Tell Us About Your Vision *</label>
                <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-yellow-300/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm" placeholder="Share your event vision, special requirements, or any questions you have..." style={fontStyles.inter}></textarea>
              </div>
              {/* UPDATED: Reduced padding and text size */}
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:shadow-lg text-black px-6 py-3 text-base sm:px-10 sm:py-5 sm:text-xl font-bold transition-all duration-700 flex items-center justify-center space-x-2 shadow-md hover:shadow-yellow-500/50 transform hover:scale-110 group" style={fontStyles.inter}>
                <span>Send via WhatsApp</span>
                <Send className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-700" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;