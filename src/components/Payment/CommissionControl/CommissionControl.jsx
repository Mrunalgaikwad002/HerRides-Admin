import React, { useState } from 'react';
import './CommissionControl.css';

const CommissionControl = () => {
  const [filter, setFilter] = useState({
    driverId: '',
    vehicleType: '',
    status: ''
  });

  const [commissions] = useState([
    {
      id: 'COM001',
      driverId: 'DRV001',
      driverName: 'John Doe',
      vehicleType: 'car',
      baseRate: 10,
      currentRate: 12,
      effectiveFrom: '2024-03-01',
      status: 'active',
      lastUpdated: '2024-03-15',
      updatedBy: 'Admin User'
    },
    {
      id: 'COM002',
      driverId: 'DRV002',
      driverName: 'Jane Smith',
      vehicleType: 'bike',
      baseRate: 8,
      currentRate: 8,
      effectiveFrom: '2024-02-01',
      status: 'active',
      lastUpdated: '2024-02-01',
      updatedBy: 'System'
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRateChange = (commissionId, newRate) => {
    // Implement commission rate change logic
    console.log(`Changing commission rate for ${commissionId} to ${newRate}%`);
  };

  return (
    <div className="commission-control-section">
      <h3>Commission Control</h3>
      
      <div className="filter-section">
        <input
          type="text"
          name="driverId"
          value={filter.driverId}
          onChange={handleFilterChange}
          placeholder="Filter by Driver ID"
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
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="table-container">
        <table className="commission-table">
          <thead>
            <tr>
              <th>Driver Details</th>
              <th>Vehicle Type</th>
              <th>Base Rate</th>
              <th>Current Rate</th>
              <th>Effective From</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {commissions.map(commission => (
              <tr key={commission.id}>
                <td>
                  <div className="driver-info">
                    <span className="driver-name">{commission.driverName}</span>
                    <span className="driver-id">{commission.driverId}</span>
                  </div>
                </td>
                <td>
                  <span className="vehicle-type">
                    {commission.vehicleType}
                  </span>
                </td>
                <td>{commission.baseRate}%</td>
                <td>{commission.currentRate}%</td>
                <td>{commission.effectiveFrom}</td>
                <td>
                  <div className="update-info">
                    <span>{commission.lastUpdated}</span>
                    <span className="updated-by">By: {commission.updatedBy}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${commission.status}`}>
                    {commission.status}
                  </span>
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleRateChange(commission.id, commission.currentRate)}
                  >
                    Edit Rate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionControl; 