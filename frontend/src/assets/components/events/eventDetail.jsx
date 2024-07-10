import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import banner from './banner.png'
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: eventId } = useParams();
  const navigate= useNavigate()
  const token = localStorage.getItem('token');
  const mail = localStorage.getItem('mail');

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

  const HandleDelete = async () => {
    
    if (!token) {
      return alert('You need to be logged in to delete an event.');
    }
    try {
      await axios.delete(`http://localhost:3000/events/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Event deleted successfully');
      navigate('/events');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    }
  };

  const AdminFeatures =()=>{
    if(event.creator.email === mail){
      return <div>
        <button className='Discover2'><MdEdit /> Edit</button>
        <button className='Discover2' onClick={HandleDelete}><MdDelete /> Delete</button>
        <button className='Discover2'><FaUser /> See Registered Participants</button>
      </div>
    }
    else return <div>
      <button className='Discover2'><FaUserPlus /> Register</button>
      <button className='Discover2'><IoBookmark /> Save</button>
    </div>
  }

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
      <div style={{display : 'flex'}}>
        <AdminFeatures/>
      </div>
      </div>
    </div>
  );
};

export default EventDetail;
