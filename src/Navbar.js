import React from 'react';
import { Link } from 'react-router-dom';
import mytashi from './Tashi.jpg';
import './Navbar.css';

const Navbar = ({ balance }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={mytashi} width="100" height="100"/>
        <div className="navbar-text ml-auto">
          Balance: ${balance}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
