import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import App from './App';
import './styles/main.scss';  // Import the Sass file
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
<HelmetProvider>
  <App />

</HelmetProvider>

    <App />
  </BrowserRouter>

);
