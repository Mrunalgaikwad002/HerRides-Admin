import React from 'react';
import './UserDetailSection.css';

function UserDetailSection() {
  return (
    <div className="user-detail-section">
      {/* User Header */}
      <div className="user-header">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png" alt="avatar" className="user-avatar" />
        <div className="user-title">
          <h2>Divya Kumari</h2>
          <p>#5689 - Activa 5</p>
        </div>
        <button className="deactivate-button">⏏️ Deactivate</button>
      </div>

      {/* User Info Grid */}
      <div className="user-info-grid">
        <div className="info-item">
          <span className="info-label">Contact</span>
          <p>Divyayxyz@gmail.com</p>
          <p>+91 9876543210</p>
        </div>
        <div className="info-item">
          <span className="info-label">Location</span>
          <p>Kanpur</p>
          <p>Uttar pradesh</p>
        </div>
        <div className="info-item">
          <span className="info-label">Performance</span>
          <p>315 rides</p>
          <p className="complaints">3 complaints</p>
        </div>
        <div className="info-item">
          <span className="info-label">Joined</span>
          <p>3/15/2025</p>
        </div>
        <div className="info-item">
          <span className="info-label">Status</span>
          <p><span className="status-tag verified">Verified</span></p>
        </div>
      </div>

      {/* Ride History */}
      <div className="ride-history-section">
        <h4>Ride History</h4>
        <p className="history-timeline">See past timeline history</p>
        <div className="history-list">
          {/* History Header */}
          <div className="history-header">
            <div className="history-item-route">Route</div>
            <div className="history-item-rider">Rider</div>
            <div className="history-item-datetime">Date & Time</div>
          </div>
          {/* Sample History Items */}
          <div className="history-row">
            <div className="history-item-route"><p>Agra Fort → Kanpur Junction</p><small>Uttar Pradesh</small></div>
            <div className="history-item-rider"><p>kashish Singh</p><small>+91 9876543210</small></div>
            <div className="history-item-datetime"><p>26 May, 2025</p><small>10:45 AM</small></div>
          </div>
           <div className="history-row">
            <div className="history-item-route"><p>Agra Fort → Kanpur Junction</p><small>Uttar Pradesh</small></div>
            <div className="history-item-rider"><p>Kanchana Rajput</p><small>+91 9876543210</small></div>
            <div className="history-item-datetime"><p>26 May, 2025</p><small>10:45 AM</small></div>
          </div>
           <div className="history-row">
            <div className="history-item-route"><p>Agra Fort → Kanpur Junction</p><small>Uttar Pradesh</small></div>
            <div className="history-item-rider"><p>Savitri Devi</p><small>+91 9876543210</small></div>
            <div className="history-item-datetime"><p>26 May, 2025</p><small>10:45 AM</small></div>
          </div>
             <div className="history-row">
            <div className="history-item-route"><p>Agra Fort → Kanpur Junction</p><small>Uttar Pradesh</small></div>
            <div className="history-item-rider"><p>Seema Rathore</p><small>+91 9876543210</small></div>
            <div className="history-item-datetime"><p>26 May, 2025</p><small>10:45 AM</small></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserDetailSection; 