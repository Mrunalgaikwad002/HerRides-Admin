import React, { useState } from 'react';
import './TripPayments.css';

const TripPayments = () => {
  const [filter, setFilter] = useState({
    date: '',
    driverId: '',
    status: ''
  });

  const [trips] = useState([
    {
      id: 'TRIP001',
      driverId: 'DRV001',
      driverName: 'John Doe',
      date: '2024-03-20',
      time: '14:30',
      pickup: 'Mumbai Central',
      dropoff: 'Andheri',
      distance: '15.5 km',
      duration: '45 min',
      fare: 350,
      commission: 35,
      netAmount: 315,
      status: 'completed'
    },
    // Add more sample data
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="trip-payments-section">
      <h3>Trip Payments</h3>
      
      <div className="filter-section">
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
          placeholder="Filter by date"
        />
        <input
          type="text"
          name="driverId"
          value={filter.driverId}
          onChange={handleFilterChange}
          placeholder="Filter by Driver ID"
        />
        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="disputed">Disputed</option>
        </select>
      </div>

      <div className="table-container">
        <table className="trip-table">
          <thead>
            <tr>
              <th>Trip ID</th>
              <th>Driver Details</th>
              <th>Date & Time</th>
              <th>Route</th>
              <th>Distance & Duration</th>
              <th>Fare Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {trips.map(trip => (
              <tr key={trip.id}>
                <td>{trip.id}</td>
                <td>
                  <div className="driver-info">
                    <span className="driver-name">{trip.driverName}</span>
                    <span className="driver-id">{trip.driverId}</span>
                  </div>
                </td>
                <td>
                  <div className="datetime-info">
                    <span>{trip.date}</span>
                    <span>{trip.time}</span>
                  </div>
                </td>
                <td>
                  <div className="route-info">
                    <span className="pickup">From: {trip.pickup}</span>
                    <span className="dropoff">To: {trip.dropoff}</span>
                  </div>
                </td>
                <td>
                  <div className="trip-details">
                    <span>{trip.distance}</span>
                    <span>{trip.duration}</span>
                  </div>
                </td>
                <td>
                  <div className="fare-details">
                    <span>Fare: ₹{trip.fare}</span>
                    <span>Commission: ₹{trip.commission}</span>
                    <span>Net: ₹{trip.netAmount}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${trip.status}`}>
                    {trip.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripPayments; 