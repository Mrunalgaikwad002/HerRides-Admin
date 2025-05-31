import React from 'react';
import './StatsGrid.css';

function StatsGrid() {
  return (
    <div className="stats-grid">
      {/* Total Riders */}
      <div className="stat-card">
        <h3>Total Riders</h3>
        <p>2845 <span className="increase">▲ 14%</span></p>
        <small>Compared to last week</small>
      </div>

      {/* Total Drivers */}
      <div className="stat-card">
        <h3>Total Drivers</h3>
        <p>126 <span className="increase">▲ 4%</span></p>
        <small>Compared to last yesterday</small>
      </div>

      {/* Today's Ride */}
      <div className="stat-card">
        <h3>Today's Ride</h3>
        <p>53 <span className="increase">▲ 19%</span></p>
        <small>Compared to yesterday</small>
      </div>

      {/* Revenue Today */}
      <div className="stat-card">
        <h3>Revenue Today</h3>
        <p>₹ 5681 <span className="decrease">▼ 4%</span></p>
        <small>Compared to yesterday</small>
      </div>
    </div>
  );
}

export default StatsGrid; 