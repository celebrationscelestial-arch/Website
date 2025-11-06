import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- This is the key change

import App from './App'; // Your main app component
import './index.css';

// 1. Get the root element
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// 2. Render your App, wrapped in a single, simple BrowserRouter
// This tells React: "Hey, App.tsx is now in charge of all routes."
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);