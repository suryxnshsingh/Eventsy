import React from 'react';
import { FaUsers, FaStar, FaRegCalendarAlt, FaRocket, FaChartLine, FaUserPlus, FaCalendarCheck, FaCoffee } from 'react-icons/fa';
import './landing.css';
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import land from '../land.png'

export function Landing() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

   const Redirecter = ()=>{
    if(token) navigate('/form')

    else navigate('/signin')
   } 

  return (
    <div className="landing-page">
        <br></br>
        <div className='landMain' style={{display : 'flex', justifyContent : 'center'}}>
        <div style={{display : 'flex', justifyContent : 'center', flexDirection : "column", alignItems : "center"}}>
            <h1>Welcome to <a className='eventsyLandingH'>Eventsy!</a></h1>
            <p style = {{ color : '#fff', textAlign : 'center' }} >Your one-stop solution for all event management needs.</p>
            <br></br>
            <button className="cta-button" onClick={Redirecter}><a className='landButton'>Create Your First Event</a></button>
        </div>
        <div className='landImg'>
        <img src = { land } className='limg' ></img>
        </div>
        </div>

        <br></br><br></br>
        <h1 className='Lh1'>Key Features</h1>
      <section className="features-overview">
        <div className="features-grid">
          <div className="feature-card CSS">
            <FaRegCalendarAlt className="icon" />
            <h3 className='Lh3'>Comprehensive Management</h3>
            <p>Manage events of any size, type, intensity with ease.</p>
          </div>
          <div className="feature-card CSS">
            <FaUsers className="icon" />
            <h3 className='Lh3'>User-Friendly Interface</h3>
            <p>Easy to navigate, explore, manage and register events.</p>
          </div>
          <div className="feature-card CSS">
            <FaRocket className="icon" />
            <h3 className='Lh3'>Flexible / Scalable</h3>
            <p>Our platform scales with your needs, adapting to any event type and size.</p>
          </div>
          <div className="feature-card CSS">
            <FaChartLine className="icon" />
            <h3 className='Lh3'>Advance Analytics</h3>
            <p>Gain insights into your events with our advanced analytics tools.</p>
          </div>
          <div className="feature-card CSS">
            <FaStar className="icon" />
            <h3 className='Lh3'>Top-Rated Support</h3>
            <p>24/7 customer support for all your needs.</p>
          </div>
        </div>
      </section>
      <br></br>

      <h1 className='Lh1'>How It Works</h1>
      <section className="how-it-works">
        <div className="features-grid">
          <div className="feature-card CSS" onClick={()=>{navigate('/signin')}}>
            
            <FaUserPlus className="card-icon" />
            <h3>Step 1</h3>
            <p>Create an account.</p>
          </div>
          <MdNavigateNext className='next'/>

          <div className="feature-card CSS" onClick={()=>{navigate('/events')}}>
            <FaCalendarCheck className="card-icon" />
            <h3>Step 2</h3>
            <p>Register your event.</p>
          </div>
          <MdNavigateNext className='next'/>

          <div className="feature-card CSS">
            <FaCoffee className="card-icon" />
            <h3>Step 3</h3>
            <p>Sit back and Relax</p>
          </div>
        </div>
      </section>
      <br></br>

      <section className="about-eventsy">
        <h1>About <a className='eventsyLandingH'>Eventsy</a></h1>
        <br></br><br></br>
        <p>
        Eventsy is an innovative event management platform designed to streamline the process of creating, 
        managing, and attending events. Whether you are organizing a small meetup or a large conference,
        Eventsy provides the tools necessary to ensure your event runs smoothly. With an intuitive interface 
        and robust features, Eventsy simplifies event planning and enhances attendee experience.
        </p>
        <br></br>
        <h3 className='LAh3'>Frontend</h3>
                    <ul>
                        <li><b>React:</b> A JavaScript library for building user interfaces.</li>
                        <li><b>Axios:</b> A promise-based HTTP client for making asynchronous requests.</li>
                        <li><b>React Router:</b> A library for handling routing in React applications.</li>
                    </ul>
                    <br></br>
                    <h3 className='LAh3'>Backend</h3>
                    <ul>
                        <li><b>Node.js:</b> A JavaScript runtime built on Chrome's V8 engine.</li>
                        <li><b>Express.js:</b> A fast, unopinionated, minimalist web framework for Node.js.</li>
                        <li><b>MongoDB:</b> A NoSQL database for storing event data and user information.</li>
                    </ul>
      </section>
      <br></br>
    </div>
  );
}

