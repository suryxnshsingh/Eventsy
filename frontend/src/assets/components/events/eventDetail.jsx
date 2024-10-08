import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import banner from './banner.png';
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaUserPlus, FaUser, FaUserCheck } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { MdEdit, MdDelete, MdBookmarkAdded } from "react-icons/md";
import { Grid } from 'react-loader-spinner';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { id: eventId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const mail = localStorage.getItem('mail');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://eventsy.onrender.com/events/${eventId}`);
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

  if (loading) return <div style={{ display : 'grid', placeItems : 'center', marginTop : '15%'}}>
                          
                          <Grid
                            visible={true}
                            height="100px"
                            width="100px"
                            color="#ff2c9c"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass="grid-wrapper"
                            /></div>;
  if (error) return <div>{error}</div>;

  const handleDelete = async () => {
    if (!token) {
      return alert('You need to be logged in to delete an event.');
    }
    try {
      await axios.delete(`https://eventsy.onrender.com/events/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Event deleted successfully');
      navigate('/events');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    }
  };

  const handleEdit = () => {
    navigate(`/events/edit/${eventId}`);
  };

  const handleRegister = () => {
    if(!token){
      navigate('/signup')
    }
    else{
      //logic
      setIsRegistered(prevState => !prevState);
    }
  };

  const handleSave = () => {
    if(!token){
      navigate('/signup')
    }
    else{
    //logic
    setIsSaved(prevState => !prevState);
    }
  };

  const AdminFeatures = () => {
    if (event.creator.email === mail) {
      return (
        <div>
          <button className='Discover2' onClick={handleEdit}><MdEdit /> Edit</button>
          <button className='Discover2' onClick={handleDelete}><MdDelete /> Delete</button>
          <button className='Discover2'><FaUser /> See Registered Participants</button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='Discover2' onClick={handleRegister}>
            {isRegistered ? <><FaUserCheck /> Registered</> : <><FaUserPlus /> Register</>}
          </button>
          <button className='Discover2' onClick={handleSave}>
            {isSaved ? <><MdBookmarkAdded /> Saved</> : <><IoBookmark /> Save</>}
          </button>
        </div>
      );
    }
  }

  return (
    <div className="details">
      <div className='Discover' onClick={() => { navigate('/events') }}><IoArrowBackCircle className='iconD' /> Discover Events</div>
      <br></br>
      <div>
        <img src={banner} alt='banner img' className='EBanner'></img>
        <h2 className='color'>{event.title}</h2>
        <p>Organised By : <b>{event.creator.username} ({event.creator.email} )</b></p>
        <br></br>
        <p><MdOutlineLocationOn className='iconD' />{event.location}</p>
        <p><BsCalendarDate className='iconD' />{event.date.split('T')[0]}</p>
        <p><AiOutlineDollarCircle className='iconD' />{event.entry}</p>
        <br></br>
        <p style={{whiteSpace : 'pre-wrap'}}>{event.description}</p>
        <div style={{ display: 'flex' }}>
          <AdminFeatures />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
