import React from 'react';
import './Tabs.css';

function Tabs() {
  return (
    <div className="rides-tabs">
      {/* Tabs will go here */}
      <div className="active-tab">All Rides (561)</div>
      <div>Ongoing (240)</div>
      <div>Completed (305)</div>
      <div>Cancelled (5)</div>
    </div>
  );
}

export default Tabs; 