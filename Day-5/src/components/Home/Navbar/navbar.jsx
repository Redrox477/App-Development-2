import React from 'react';
import './navbar.css';
import Logo from '../../../assets/images/mainlogo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Logo} alt="logo" className="logo" />
        <p>GiftVibes</p>
      </div>
      <div className="navlinks">
        <a href="#" className="navLink">About</a>
        <a href="#" className="navLink">Products</a>
        <a href="#" className="navLink">Contact us</a>
        <a className="nav4"><Link to="/giftvibes/login" style={{ color: "black" }}>Login</Link></a>
      </div>
    </div>
  );
}

