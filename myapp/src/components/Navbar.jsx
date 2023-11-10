import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">StartUp</div>
      <div className="navbar__spacer"></div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Navbar;
