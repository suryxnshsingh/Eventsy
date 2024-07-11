import { CgProfile } from "react-icons/cg";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token');

  const Logout= () =>{
    localStorage.clear()
    navigate("/")
  }
  const NavLog = ()=> {
    if(token){
      return <div className="navbar-section user-actions">
        <Link to="/profile">Profile</Link>
        <div  onClick={Logout} className="logout">Logout</div>
        </div>
    }
    else return <>
      <Link to="/signin">Login</Link>
      <Link to="/signup">Signup</Link>
    </>
  }

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
        <NavLog/>
      </div>
    </nav>
  );
}
