import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        ✈️ <span>Flight Booking App</span>
      </div>
      <nav className="nav-links">
         <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/flights">Flights</a>
        <a href="/contact">Contact</a>
        <a href="/rate">Rate</a>
        
        
      </nav>
    </header>
  );
};

export default Header;