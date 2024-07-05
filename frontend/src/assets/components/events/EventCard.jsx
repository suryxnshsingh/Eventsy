import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './event.css'

const EventCard = ({ event }) => {
  const navigate = useNavigate()
  return (
    <div className="event-card" onClick={()=>{navigate(`/events/${event._id}`)}}>
      <h2 className='cardh2'>{event.title}</h2>
      <p><FaLocationDot /> {event.location}</p>
      <p><BsCalendarDateFill /> {event.date}</p>
      <br></br>
      <div className='priceTag'>${event.entry}</div>
      {/* <Link to={`http://localhost:3000/events/${event.id}`}>View Details</Link> */}
    </div>
  );
};

export default EventCard;
