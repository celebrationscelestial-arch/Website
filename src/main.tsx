import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Your main homepage component
import ServicesPage from './actualservices.tsx'; // Your services page
import './index.css';

// 1. Define your "routes" or "URL map"
const router = createBrowserRouter([
  {
    path: "/", // The "root" or homepage URL
    element: <App />, // Show the <App /> component
  },
  {
    path: "/services", // The URL for your services page
    element: <ServicesPage />, // Show the <ServicesPage /> component
  },
  // You can add more routes here
]);

// 2. Render the RouterProvider inside your StrictMode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


