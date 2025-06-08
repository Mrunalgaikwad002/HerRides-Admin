import React, { useState } from 'react';
import './DriverList.css';

const DriverList = () => {
  const [filter, setFilter] = useState({
    date: '',
    location: '',
    vehicleType: '',
    payoutStatus: ''
  });

  const [drivers] = useState([
    {
      id: 'DRV001',
      name: 'John Doe',
      phone: '+91 9876543210',
      city: 'Mumbai',
      zone: 'South',
      totalEarnings: {
        daily: 2500,
        weekly: 15000,
        monthly: 60000
      },
      commission: 1500,
      netPayable: 1000,
      walletBalance: 5000
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
    <div className="driver-list-section">
      <h3>Driver List</h3>
      
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
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
          placeholder="Filter by location"
        />
        <select
          name="vehicleType"
          value={filter.vehicleType}
          onChange={handleFilterChange}
        >
          <option value="">All Vehicle Types</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="auto">Auto</option>
        </select>
        <select
          name="payoutStatus"
          value={filter.payoutStatus}
          onChange={handleFilterChange}
        >
          <option value="">All Payout Status</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="disputed">Disputed</option>
        </select>
      </div>

      <div className="table-container">
        <table className="driver-table">
          <thead>
            <tr>
              <th>Driver Name + ID</th>
              <th>Phone Number</th>
              <th>City/Zone</th>
              <th>Total Earnings</th>
              <th>Commission</th>
              <th>Net Payable</th>
              <th>Wallet Balance</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id}>
                <td>
                  <div className="driver-info">
                    <span className="driver-name">{driver.name}</span>
                    <span className="driver-id">{driver.id}</span>
                  </div>
                </td>
                <td>{driver.phone}</td>
                <td>{`${driver.city} - ${driver.zone}`}</td>
                <td>
                  <div className="earnings-info">
                    <span>Daily: ₹{driver.totalEarnings.daily}</span>
                    <span>Weekly: ₹{driver.totalEarnings.weekly}</span>
                    <span>Monthly: ₹{driver.totalEarnings.monthly}</span>
                  </div>
                </td>
                <td>₹{driver.commission}</td>
                <td>₹{driver.netPayable}</td>
                <td>₹{driver.walletBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList; 