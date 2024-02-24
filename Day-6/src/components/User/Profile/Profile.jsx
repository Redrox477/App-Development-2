import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div class="container">
    <h1>User Profile</h1>
    <div class="profile">
        <img src="profile-picture.jpg" alt="Profile Picture"/>
        <h2>John Doe</h2>
        <p>Email: john.doe@example.com</p>
        <p>Address: 123 Main St, Cityville</p>
        <p>Phone: 555-1234</p>
        <p>Member Since: January 1, 2020</p>
        <p><a href="edit-profile.html">Edit Profile</a></p>
    </div>
</div>
  );
};

export default Profile;
