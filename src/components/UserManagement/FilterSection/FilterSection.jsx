import React from 'react';
import './FilterSection.css';

function FilterSection() {
  return (
    <div className="filter-section">
      <div className="filter-icon">{/* Filter icon placeholder */} ⚙️</div>
      <input type="text" placeholder="Filter by name" className="filter-search-bar" />
      <select className="filter-dropdown">
        <option value="">All States</option>
        {/* Add state options here */}
      </select>
      <select className="filter-dropdown">
        <option value="">All Cities</option>
        {/* Add city options here */}
      </select>
      <select className="filter-dropdown">
        <option value="">Status</option>
        {/* Add status options here */}
      </select>
    </div>
  );
}

export default FilterSection; 