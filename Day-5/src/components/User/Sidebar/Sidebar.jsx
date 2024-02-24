import React from 'react';
import './Sidebar.css'; // Import CSS file
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div>
      <h2>Welcome</h2>
      <h3>Monish</h3>
      <ul>
        <li><a ><Link to="products">Shop</Link></a></li>
        <li><a ><Link to="profile">Profile</Link></a></li>
        <li><a ><Link to="cart">Cart</Link></a></li>
        <li><a ><Link to="order">Order</Link></a></li>
      </ul>
      </div>   
      <ul>
        <li><a ><Link to="/">Log Out</Link></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
