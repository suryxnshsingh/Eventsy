import { CgProfile } from "react-icons/cg";

// src/components/Layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-section logo" onClick={()=>{useNavigate('/')}}>
        <h1>Eventsy</h1>
      </div>
      <div className="navbar-section nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="navbar-section user-actions">
        <Link to="/signin">Login</Link>
        <Link to="/signup">Register</Link>
      </div>
    </nav>
  );
}
