
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import 'regenerator-runtime/runtime';

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or any global CSS
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </BrowserRouter>
);



