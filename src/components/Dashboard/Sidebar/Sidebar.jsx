import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Her Rides</h2>
      <input type="text" placeholder="Search..." className="search-bar" />
      <nav>
        <ul>
          <li className="active">Dashboard</li>
          <li>User Management</li>
          <li>Rides</li>
          <li>Payments & Earnings</li>
          <li>Report</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar; 