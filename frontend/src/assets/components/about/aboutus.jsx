import React from 'react';
import './aboutus.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import sury from './sury.png'

export function AboutUs() {
  return (<div>
    <h1>About Us</h1>
    <br></br>
    <div className="wrapperA">
      <div className="card">
        <img
          src={sury}
          alt="Suryansh smiling"
          className="profile-pic"
        />
        <br></br>
        <br></br>
        <div className="info">
          <h2>Suryansh Singh</h2>
          <p>CEO, CTO, COO, CeverythingO <br></br>at Eventsy Tech. Pvt. Ltd. <br></br>MalwaMill, Indore</p>
          <br></br>
          <div className="social-links">
            <a href="https://x.com/suryxnshsingh" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/suryxnshsingh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/suryxnshsingh" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com/suryxnshsingh" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill />
            </a>
            
          </div>
        </div>
      </div>
      <div className="about-eventsy">
        <p>
        Eventsy is an innovative event management platform designed to streamline the process of creating, managing, 
        and attending events. Whether you are organizing a small meetup or a large conference, Eventsy provides the tools
         necessary to ensure your event runs smoothly. With an intuitive interface and robust features, Eventsy simplifies
          event planning and enhances attendee experience.</p>
          <br></br>
          <h3>Frontend</h3>
                    <ul>
                        <li><b>React:</b> A JavaScript library for building user interfaces.</li>
                        <li><b>Axios:</b> A promise-based HTTP client for making asynchronous requests.</li>
                        <li><b>React Router:</b> A library for handling routing in React applications.</li>
                    </ul>
                    <br></br>
                    <h3>Backend</h3>
                    <ul>
                        <li><b>Node.js:</b> A JavaScript runtime built on Chrome's V8 engine.</li>
                        <li><b>Express.js:</b> A fast, unopinionated, minimalist web framework for Node.js.</li>
                        <li><b>MongoDB:</b> A NoSQL database for storing event data and user information.</li>
                        <li><b>jsonwebtoken: </b> A library for generating and verifying JSON Web Tokens (JWT) for authentication.</li>
                    </ul>
          
      </div>
    </div>
    </div>
  );
}
