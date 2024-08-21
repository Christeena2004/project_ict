import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleSidebar}>×</button>
      <ul>
        <li><Link to="/login" onClick={toggleSidebar}>Login/Signup</Link></li>
        <li><Link to="/location" onClick={toggleSidebar}>Location</Link></li>
        <li><Link to="/wishlist" onClick={toggleSidebar}>Wishlist</Link></li>
        <li><Link to="/category" onClick={toggleSidebar}>Category</Link></li>
        <li><Link to="/payments" onClick={toggleSidebar}>Payments</Link></li>
        
        <li><Link to="/logout" onClick={toggleSidebar}>Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;