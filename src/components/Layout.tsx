import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton'; // <-- Import the new component

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* All your pages will be rendered here */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;