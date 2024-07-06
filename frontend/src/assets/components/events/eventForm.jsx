import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ event = {}, isEditing = false }) => {
  const [title, setTitle] = useState(event.title || '');
  const [description, setDescription] = useState(event.description || '');
  const [date, setDate] = useState(event.date || '');
  const [location, setLocation] = useState(event.location || '');
  const [entry, setEntry] = useState(event.entry || '');
  const navigate = useNavigate();

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
        await axios.put(`http://localhost:3000/events/${event._id}`, eventData, config);
      } else {
        await axios.post('http://localhost:3000/events', eventData, config);
      }
      navigate('/events');
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>{isEditing ? 'Edit Event' : 'Create Event'}</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Entry"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Update Event' : 'Create Event'}</button>
      </form>
    </div>
  );
};

export default EventForm;
