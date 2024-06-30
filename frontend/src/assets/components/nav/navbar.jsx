import { CgProfile } from "react-icons/cg";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-section logo" >
      <Link to="/"><h1>Eventsy</h1></Link>
      </div>
      <div className="navbar-section user-actions">
        <Link to="/events">Events</Link>
        <Link to="/whyeventsy">Why Eventsy</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Register</Link>
      </div>
    </nav>
  );
}
