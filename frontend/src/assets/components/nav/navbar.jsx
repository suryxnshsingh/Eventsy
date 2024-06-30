import { CgProfile } from "react-icons/cg";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar() {

  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="navbar-section logo" >
      <h1 onClick={()=>{
        navigate('/')
      }}>Eventsy</h1>
      </div>
      
      <div className="navbar-section user-actions">
        <Link to="/events">Events</Link>
        <Link to="/whyeventsy">Why Eventsy</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">Login</Link>
      </div>
    </nav>
  );
}
