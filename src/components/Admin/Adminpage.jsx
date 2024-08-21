import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-container2">
      <aside className="sidebar2">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </aside>
      <main className="main-content2">
        <h1> Admin Panel</h1>
        <div className="card2">
          <h3>Dashboard Overview</h3>
        </div>
        <div className="card2">
          <h3>Manage Products</h3>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
