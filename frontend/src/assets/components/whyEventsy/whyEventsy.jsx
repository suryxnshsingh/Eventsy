import React from 'react';
import './whyEventsy.css';
import { FaUsers, FaChartLine, FaShieldAlt, FaHandsHelping, FaRocket, FaTools } from 'react-icons/fa';

export function WhyEventsy() {
  return (
    <div className="why-eventsy">
      <h1>Why <a className='eventsyLandingH'>Eventsy?</a></h1>
      <div className="features-grid">
        <div className="cardDes feature-card">
          <FaUsers className="icon" />
          <h2>Comprehensive Event Management</h2>
          <p>Manage events of any size, from small meetups to large conferences, with ease.</p>
        </div>
        <div className="cardDes feature-card">
          <FaChartLine className="icon" />
          <h2>Advanced Analytics</h2>
          <p>Gain insights into your events with our advanced analytics tools.</p>
        </div>
        <div className="cardDes feature-card">
          <FaShieldAlt className="icon" />
          <h2>Security and Reliability</h2>
          <p>We prioritize the security and privacy of our users with robust measures.</p>
        </div>
        <div className="cardDes feature-card">
          <FaHandsHelping className="icon" />
          <h2>Community Building</h2>
          <p>Connect with other participants and build lasting connections.</p>
        </div>
        <div className="cardDes feature-card">
          <FaRocket className="icon" />
          <h2>Flexible and Scalable</h2>
          <p>Our platform scales with your needs, adapting to any event type and size.</p>
        </div>
        <div className="cardDes feature-card">
          <FaTools className="icon" />
          <h2>Dedicated Support</h2>
          <p>Our support team is always available to assist you with any questions or issues.</p>
        </div>
      </div>
    </div>
  );
}
