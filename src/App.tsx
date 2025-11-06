import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ---
// STEP 1: IMPORT THE LAYOUT AND *ALL* YOUR PAGES
// ---
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';       // <-- Make sure this file exists
import ServicesPage from './pages/ServicesPage'; // <-- Make sure this file exists

function App() {
  return (
    // ---
    // STEP 2: DEFINE THE ROUTES
    // ---
    <Routes>
      
      {/* This is the "Parent" route. It tells React:
        "EVERYTHING inside me MUST be wrapped by the <Layout /> component."
      */}
      <Route path="/" element={<Layout />}>
        
        {/* This is the homepage (URL: "/")
          It gets the Layout.
        */}
        <Route index element={<HomePage />} />
        
        {/* This is the team page (URL: "/team")
          Because it's NESTED, it also gets the Layout.
        */}
        <Route path="team" element={<TeamPage />} />
        
        {/* This is the services page (URL: "/services")
          Because it's NESTED, it also gets the Layout.
        */}
        <Route path="services" element={<ServicesPage />} />
        
      </Route> { /* <-- This closing tag is SUPER important */ }

    </Routes>
  );
}

export default App;