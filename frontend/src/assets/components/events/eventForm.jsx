import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './event.css';

const EventForm = () => {
  const [isMobile,setIsMobile] = useState(false)
  useEffect(()=>{
    if(window.innerWidth<768){
      setIsMobile(true)
      console.log("changed")
    }else{setIsMobile(false);console.log("revert")}
  },[window.innerWidth])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [entry, setEntry] = useState('');
    const navigate = useNavigate();
    const { id: eventId } = useParams();
    const isEditing = !!eventId;
  
    useEffect(() => {
      if (isEditing) {
        const fetchEvent = async () => {
          try {
            const response = await axios.get(`https://eventsy.onrender.com/events/${eventId}`);
            const event = response.data;
            setTitle(event.title);
            setDescription(event.description);
            setDate(event.date.split('T')[0]);
            setLocation(event.location);
            setEntry(event.entry);
          } catch (error) {
            console.error('Error fetching event:', error);
          }
        };
        fetchEvent();
      }
    }, [eventId, isEditing]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const token = localStorage.getItem('token');
  
      if (!token) {
        alert('You must be logged in to perform this action.');
        navigate('/signin');
        return;
      }
  
      try {
        const eventData = { title, description, date, location, entry };
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
  
        if (isEditing) {
          await axios.put(`https://eventsy.onrender.com/events/${eventId}`, eventData, config);
        } else {
          await axios.post('https://eventsy.onrender.com/events', eventData, config);
        }
        navigate('/events');
      } catch (error) {
        console.error('Error saving event:', error);
      }
    };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>{isEditing ? 'Edit ' : 'Create '}<a className='color'>Event</a></h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div>
          <textarea
            className="input-boxF"
            placeholder="Description"
            rows="10"
            cols = {isMobile?'40':'90'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="input-box">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="input-box">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="input-box">
          <input
            type="text"
            placeholder="Entry Fee"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            required
          />
        </div>
        <br/>
        <button className='form-button' type="submit">{isEditing ? 'Update Event' : 'Create Event'}</button>
      </form>
    </div>
  );
};

export default EventForm;
