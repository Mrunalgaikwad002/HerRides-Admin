import React from 'react';
import './BottomSection.css';

function BottomSection() {
  return (
    <div className="bottom-section">
      {/* Ongoing Rides */}
      <div className="card">
        <h3>Ongoing Rides</h3>
        {/* Ongoing Rides List Placeholder */}
        <div className="list-placeholder">Ongoing Rides List</div>
        <button className="view-all-button">View All Rides</button>
      </div>

      {/* Emergency Alerts */}
      <div className="card">
        <h3>Emergency Alerts</h3>
        {/* Emergency Alerts Placeholder */}
        <div className="alert-placeholder">Emergency Alert Info</div>
        {/* No other alerts placeholder */}
        <div className="no-alerts">No other alerts</div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3>Quick Actions</h3>
        <div className="quick-action-item">
          <p>Pending Verifications</p>
          <span>23</span>
        </div>
        <div className="quick-action-item">
          <p>Open Complaints</p>
          <span>12</span>
        </div>
        <div className="quick-action-item">
          <p>Pending Payouts</p>
          <span>$566 to be processed</span>
        </div>
        <button className="send-notifications-button">Send Notifications</button>
      </div>
    </div>
  );
}

export default BottomSection; 