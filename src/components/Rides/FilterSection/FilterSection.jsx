import React from 'react';
import './FilterSection.css';

function FilterSection() {
  return (
    <div className="rides-filter-section">
      {/* Filter and Refresh buttons will go here */}
      <button className="filter-button"><i className="filter-icon"></i> Filter</button>
      <button className="refresh-button"><i className="refresh-icon"></i> Refresh</button>
    </div>
  );
}

export default FilterSection; 