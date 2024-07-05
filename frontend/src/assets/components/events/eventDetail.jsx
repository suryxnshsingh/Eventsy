import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import banner from './banner.png'
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: eventId } = useParams();
  const navigate= useNavigate()

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        setError('Error fetching event');
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <div><h1>Loading...</h1></div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="details">
      <div className='Discover' onClick={()=>{navigate('/events')}} ><IoArrowBackCircle className='iconD'/> Discover Events</div>
      <br></br>
      <div>
      <img src={banner} alt='banner img' className='EBanner'></img>
      <h2 className='color'>{event.title}</h2>
      <p>Organised By : <b>{event.creator.username} ({event.creator.email})</b></p>
      <br></br>
      <p><MdOutlineLocationOn className='iconD'/>{event.location}</p>
      <p><BsCalendarDate className='iconD'/>{event.date}</p>
      <p><AiOutlineDollarCircle className='iconD'/>{event.entry}</p>
      <br></br>
      <p>{event.description}</p>
      <button className='Discover2'>Register</button>
      <button className='Discover2'>Save</button>
      </div>
    </div>
  );
};

export default EventDetail;
