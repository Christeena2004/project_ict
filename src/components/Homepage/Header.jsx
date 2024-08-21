import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Home.css';
function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="navbarlogo">
      <img src={logo} alt="logo" className="navbarlogoimage"/>
      <h1>GreenBasket</h1>
      </div>
      <div style={{backgroundColor:''}}>
       <ul className="navbar-link">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Category">Menu</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="/Login">Sign up</Link></li>

        </ul>
        </div>
       
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
