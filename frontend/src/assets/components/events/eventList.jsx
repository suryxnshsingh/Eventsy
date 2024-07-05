import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import './event.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:3000/events');
        setEvents(res.data);

        console.log('events:', events);

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>ALL EVENTS</h1>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;

