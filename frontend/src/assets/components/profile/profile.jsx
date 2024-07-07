import React from 'react';
import './profile.css';
import profImg from './profile.png'

export function Profile() {
  const uname = localStorage.getItem('uname');
  const mail = localStorage.getItem('mail');
  return (
    <div className="wrapperP">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profImg}
            alt="User Avatar"
            className="profile-avatar"
          />
          <br></br>
          <h2 className="profile-username">{uname}</h2>
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> {mail}</p>
          <p><strong>Member since:</strong> July 2024</p>
        </div>
        <div className="profile-events">
          <h3>Your Events</h3>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
            <li>Event 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
