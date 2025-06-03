import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { WalletContextProvider } from './components/WalletContextProvider.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </BrowserRouter>
);