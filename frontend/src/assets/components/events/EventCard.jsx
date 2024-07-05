import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import './event.css'

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <br></br>
      <p>Date : {event.date}</p>
      <p>Time : </p>
      <p><FaLocationDot /> : </p>
      {/* <Link to={`http://localhost:3000/events/${event.id}`}>View Details</Link> */}
    </div>
  );
};

export default EventCard;
