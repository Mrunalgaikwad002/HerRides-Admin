import React from 'react';
import './RideList.css';

function RideList() {
  return (
    <div className="ride-list-container">
      <div className="list-header">
        <div className="header-item">Ride ID</div>
        <div className="header-item">Rider</div>
        <div className="header-item">Driver</div>
        <div className="header-item">Route</div>
        <div className="header-item">Time</div>
        <div className="header-item">Fare</div>
        <div className="header-item">Payment</div>
        <div className="header-item">Status</div>
        <div className="header-item">Action</div>
      </div>

      {/* Sample Ride List Items */}
      <div className="ride-list-item">
        <div className="ride-id">RD565</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>kashish Singh</p>
            <small>+91 9876543210</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Seema Rathore</p>
            <small>#4365, Activa 5</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Prayagraj Junction</p>
          <small>Anand Bhavan</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 10:45</p>
          <small>11 min</small>
        </div>
         <div className="ride-fare">
          <p>$5.6</p>
          <small>4.6 Km</small>
        </div>
         <div className="ride-payment">
          <p>Credit card</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD566</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Kanchana Rajput</p>
            <small>+91 9876543211</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Divya Singh</p>
            <small>#4366, Scooty Pep</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Triveni Sangam</p>
          <small>Allahabad Fort</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 11:00</p>
          <small>15 min</small>
        </div>
         <div className="ride-fare">
          <p>$7.2</p>
          <small>6.1 Km</small>
        </div>
         <div className="ride-payment">
          <p>Cash</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD567</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Savita Devi</p>
            <small>+91 9876543212</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Pooja Verma</p>
            <small>#4367, Activa 6</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Civil Lines</p>
          <small>High Court</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 11:15</p>
          <small>8 min</small>
        </div>
         <div className="ride-fare">
          <p>$4.1</p>
          <small>3.2 Km</small>
        </div>
         <div className="ride-payment">
          <p>Credit card</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD568</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Seema Rathore</p>
            <small>+91 9876543213</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Anita Patel</p>
            <small>#4368, TVS Jupiter</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Allahabad University</p>
          <small>Prayagraj Museum</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 11:30</p>
          <small>12 min</small>
        </div>
         <div className="ride-fare">
          <p>$6.5</p>
          <small>5.5 Km</small>
        </div>
         <div className="ride-payment">
          <p>Cash</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD569</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Kanchan Patel</p>
            <small>+91 9876543214</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Shalini Gupta</p>
            <small>#4369, Activa 125</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Naini Bridge</p>
          <small>Jhusi</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 11:45</p>
          <small>20 min</small>
        </div>
         <div className="ride-fare">
          <p>$9.0</p>
          <small>8.5 Km</small>
        </div>
         <div className="ride-payment">
          <p>Credit card</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD570</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Kashish Singh</p>
            <small>+91 9876543215</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Seema Rathore</p>
            <small>#4370, Scooty Zest</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Allahabad Airport</p>
          <small>Civil Lines</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 12:00</p>
          <small>25 min</small>
        </div>
         <div className="ride-fare">
          <p>$10.5</p>
          <small>10.2 Km</small>
        </div>
         <div className="ride-payment">
          <p>Credit card</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD571</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Kashish Singh</p>
            <small>+91 9876543216</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Seema Rathore</p>
            <small>#4371, Activa 6</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Hanuman Mandir</p>
          <small>Allahabad Museum</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 12:15</p>
          <small>18 min</small>
        </div>
         <div className="ride-fare">
          <p>$8.0</p>
          <small>7.5 Km</small>
        </div>
         <div className="ride-payment">
          <p>Cash</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="ride-list-item">
        <div className="ride-id">RD572</div>
        <div className="rider-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Kashish Singh</p>
            <small>+91 9876543217</small>
          </div>
        </div>
        <div className="driver-info">
           <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="details">
            <p>Seema Rathore</p>
            <small>#4372, TVS Jupiter</small>
          </div>
        </div>
        <div className="ride-route">
          <p>Khusro Bagh</p>
          <small>Prayagraj Junction</small>
        </div>
        <div className="ride-time">
          <p>12/5/2025 12:30</p>
          <small>10 min</small>
        </div>
         <div className="ride-fare">
          <p>$5.0</p>
          <small>4.0 Km</small>
        </div>
         <div className="ride-payment">
          <p>Credit card</p>
        </div>
        <div className="ride-status">
          <span className="status-tag completed">Completed</span>
        </div>
        <div className="ride-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

    </div>
  );
}

export default RideList; 