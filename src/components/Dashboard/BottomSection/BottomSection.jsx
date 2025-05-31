import React from 'react';
import './BottomSection.css';

function BottomSection() {
  return (
    <div className="bottom-section">
      {/* Ongoing Rides */}
      <div className="card ongoing-rides">
        <h3>Ongoing Rides</h3>
        <div className="rides-list">
          <div className="ride-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
            <div className="ride-details">
              <p className="rider-name">Kaashish Singh</p>
              <p className="route">Prayagraj → Prayagraj</p>
            </div>
            <span className="status-tag active">Active</span>
          </div>
          <div className="ride-item">
             <img src="https://static.vecteezy.com/system/resources/previews/024/966/233/original/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg" alt="avatar" className="avatar" />
            <div className="ride-details">
              <p className="rider-name">Sneha Agrawal</p>
              <p className="route">Prayagraj → Prayagraj</p>
            </div>
            <span className="status-tag en-route">En Route</span>
          </div>
           <div className="ride-item">
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png" alt="avatar" className="avatar" />
            <div className="ride-details">
              <p className="rider-name">Shrishti patel</p>
              <p className="route">Prayagraj → Prayagraj</p>
            </div>
            <span className="status-tag waiting">Waiting</span>
          </div>
        </div>
        <button className="view-all-button">View All Rides</button>
      </div>

      {/* Emergency Alerts */}
      <div className="card emergency-alerts-card">
        <h3>Emergency Alerts</h3>
        <div className="alert-content">
            {/* Placeholder for alert icon */}
            <div className="alert-icon">!</div>
            <div className="alert-details">
                <p className="alert-type">SOS Alert</p>
                <p className="alert-info">Rider: Shreya Trivedi</p>
                <p className="alert-info">Location: Sector 29, Noida</p>
            </div>
        </div>
        <button className="take-action-button">Take action</button>
         {/* No other alerts placeholder */}
         <div className="no-alerts">No other alerts</div>
      </div>

      {/* Quick Actions */}
      <div className="card quick-actions-card">
        <h3>Quick Actions</h3>
        <div className="quick-actions-list">
          <div className="quick-action-item">
            <p>Pending Verifications</p>
            <span className="quick-action-count">23</span>
          </div>
          <div className="quick-action-item">
            <p>Open Complaints</p>
            <span className="quick-action-count">12</span>
          </div>
          <div className="quick-action-item">
            <p>Pending Payouts</p>
            <span className="quick-action-amount">$566 to be processed</span>
          </div>
        </div>
        <button className="send-notifications-button">Send Notifications</button>
      </div>
    </div>
  );
}

export default BottomSection; 