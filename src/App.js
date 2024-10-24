// src/App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import ConnectWallet from './components/ConnectWallet'; // Import the ConnectWallet component

function App() {
  return (
    <div>
      <Header />
      <ConnectWallet /> {/* Add the ConnectWallet component here */}
      <AppRoutes />
    </div>
  );
}

export default App;
