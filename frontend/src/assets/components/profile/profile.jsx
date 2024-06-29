import React from 'react';
import './profile.css'; // Import the CSS file

export function Profile() {
  return (
    <div className="wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2 className="profile-username">John Doe</h2>
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Member since:</strong> January 2024</p>
        </div>
        <div className="profile-events">
          <h3>Your Events</h3>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
            <li>Event</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
