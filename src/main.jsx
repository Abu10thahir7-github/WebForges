import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/main.scss';  // Import the Sass file
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </HelmetProvider>
);
