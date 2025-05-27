import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional, agar styling chahiye
import Home from './Home'; // ya App agar wo main component hai

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />   {/* Yahan apna component render karo */}
  </React.StrictMode>
);
