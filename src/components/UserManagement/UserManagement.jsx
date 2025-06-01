import React from 'react';
import './UserManagement.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar'; // Reusing the Sidebar component
import Tabs from './Tabs/Tabs';
import FilterSection from './FilterSection/FilterSection';
import UserList from './UserList/UserList';
import UserDetailSection from './UserDetailSection/UserDetailSection';

function UserManagement() {
  return (
    <div className="user-management-container">
      <Sidebar /> {/* Include the shared Sidebar */}
      <div className="user-management-content">
        <h2>User Management</h2>
        <Tabs />
        <FilterSection />
        <div className="user-management-body">
          <UserList />
          <UserDetailSection />
        </div>
      </div>
    </div>
  );
}

export default UserManagement; 