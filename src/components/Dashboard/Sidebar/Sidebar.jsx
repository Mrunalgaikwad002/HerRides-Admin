import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Her Rides</h2>
      <input type="text" placeholder="Search..." className="search-bar" />
      <nav>
        <ul>
          <li className={location.pathname === '/dashboard' ? 'active' : ''}><Link to="/dashboard"><i className="icon dashboard-icon"></i> Dashboard</Link></li>
          <li className={location.pathname === '/user-management' ? 'active' : ''}><Link to="/user-management"><i className="icon user-management-icon"></i> User Management</Link></li>
          <li className={location.pathname === '/rides' ? 'active' : ''}><Link to="/rides"><i className="icon rides-icon"></i> Rides</Link></li>
          <li><i className="icon payments-icon"></i> Payments & Earnings</li>
          <li><i className="icon report-icon"></i> Report</li>
          <li><i className="icon settings-icon"></i> Settings</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar; 