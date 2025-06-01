import React from 'react';
import './Tabs.css';

function Tabs() {
  return (
    <div className="user-management-tabs">
      <button className="tab active">Drivers (267)</button>
      <button className="tab">Riders (8616)</button>
    </div>
  );
}

export default Tabs; 