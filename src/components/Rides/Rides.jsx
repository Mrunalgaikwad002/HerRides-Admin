import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Tabs from './Tabs/Tabs';
import FilterSection from './FilterSection/FilterSection';
import RideList from './RideList/RideList';
import './Rides.css';

function Rides() {
  return (
    <div className="rides-page">
      <Sidebar />
      <div className="rides-content">
        <h2>All Rides</h2>
        <p>Monitor and manage all platform rides</p>
        <div className="rides-header">
          <Tabs />
          <FilterSection />
        </div>
        <RideList />
      </div>
    </div>
  );
}

export default Rides; 