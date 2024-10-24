// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from the 'react-dom/client'
import App from './App';
import './index.css'; // Import your CSS files as needed
import { initEthers } from './ethers'; // Import the initEthers function

const startApp = async () => {
  await initEthers(); // Initialize ethers.js
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

startApp();
