import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import './event.css';
import { useNavigate } from 'react-router-dom';
import { Grid } from 'react-loader-spinner';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('https://eventsy.onrender.com/events');
        setEvents(res.data);

      } catch (error) {
        console.error('Error fetching events:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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

  return (
    <div>
      <h1 className='lisH1'>Discover <a className='color'>Events</a></h1>
      <div className='create'>
        <div><h2>Looking to create an Event?</h2></div>
        <div className='form-button' onClick={()=>{navigate('/form')}}>Create Event Now!</div>
      </div>
      <br></br>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;

