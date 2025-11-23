import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <Link to="/"></Link>
        <Link to="/about"></Link>
        <Link to="/flights"></Link>
        <Link to="/contact"></Link>
        <Link to="/rate"></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
