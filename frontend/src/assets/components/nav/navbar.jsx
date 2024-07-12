import { CgProfile } from "react-icons/cg";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/");
    setMenuOpen(!menuOpen);
  };

  const NavLog = () => {
    if (token) {
      return (
        <div className="navbar-section user-actions">
          <Link to="/profile" onClick={toggleMenu}>Profile</Link>
          <div onClick={Logout} className="logout">Logout</div>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/signup" onClick={toggleMenu}>Signup</Link>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-section logo">
        <h1 onClick={() => navigate('/')}>Eventsy</h1>
        <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      </div>
      
      

      <div className={`navbar-section nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/events" onClick={toggleMenu}>Events</Link>
        <Link to="/whyeventsy" onClick={toggleMenu}>Why Eventsy</Link>
        <Link to="/aboutus" onClick={toggleMenu}>About Us</Link>
        <NavLog />
      </div>
    </nav>
  );
}
