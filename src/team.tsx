import React from 'react';

// --- Team Member Data ---
// You can update this array with your team's actual names and titles.
const teamMembers = [
  {
    name: "Aravind S",
    title: "CEO and Founder",
    // imageUrl: 'path/to/founder-image.jpg'
  },
  {
    name: "Gokul Krishnan",
    title: "Co-Founder & Operations Head",
    imageUrl: 'gokul.jpeg'
  },
  {
    name: "Akhil Nair ",
    title: "Design Architect",
    imageUrl: 'akhil.jpeg'
  },
  {
    name: "Gopakumar",
    title: "Senior Event Planner",
    // imageUrl: 'path/to/architect-image.jpg'
  },
  {
    name: "Anjana S",
    title: "Event Planner",
    // imageUrl: 'path/to/planner2-image.jpg'
  },
  {
    name: "Sujith P",
    title: "Production Coordinator",
    // imageUrl: 'path/to/planner3-image.jpg'
  }
];

// --- SVG Icon for Placeholder ---
const UserIcon = () => (
  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

const Team = () => {
  return (
    // The outer section no longer needs vertical padding, as the children manage it
    <section id="team" className="bg-white">
      
      {/* === MODIFIED HEADER === */}
      {/* This header is now full-width. h-[50vh] sets its height to 50% of the viewport height. */}
      <header 
        className="relative h-[50vh] overflow-hidden"
        // --- Replace this URL with your own background image ---
        style={{ 
          backgroundImage: "url('team.jpeg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Optional: Adds a cool parallax effect
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* This container centers the *text* content and aligns it 
          with the grid below. It's set to fill the header's height 
          and center the content vertically.
        */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
          <h1 className="font-great-vibes text-5xl md:text-7xl text-white mb-6">
            Meet Our Creative Team 
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed font-serif">
              The meticulous planners and creative minds dedicated to bringing your celestial celebration to life.
            </p>
          </div>
        </div>
      </header>
      {/* === END OF MODIFIED HEADER === */}


      {/* --- Team Grid Section --- */}
      {/* This main area now has its own container and vertical padding */}
      <main className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Image Placeholder */}
                <div className="relative w-48 h-48 rounded-full bg-gray-100 mb-5 flex items-center justify-center overflow-hidden border-2 border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserIcon />
                  )}
                </div>
                
                {/* Name Placeholder */}
                <h3 className="text-2xl font-serif text-gray-800 font-medium">
                  {member.name}
                </h3>
                
                {/* Title */}
                <p className="text-base text-gray-500 font-serif italic">
                  {member.title}
                </p>

              </div>
            ))}
          </div>
        </div>
      </main>

    </section>
  );
};

export default Team;