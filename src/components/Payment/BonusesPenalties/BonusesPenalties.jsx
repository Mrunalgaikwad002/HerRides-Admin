import React, { useState } from 'react';
import './BonusesPenalties.css';

const BonusesPenalties = () => {
  const [filter, setFilter] = useState({
    date: '',
    type: '',
    status: ''
  });

  const [transactions] = useState([
    {
      id: 'BP001',
      driverId: 'DRV001',
      driverName: 'John Doe',
      date: '2024-03-20',
      type: 'bonus',
      amount: 500,
      reason: 'Excellent service rating',
      status: 'approved',
      approvedBy: 'Admin User'
    },
    {
      id: 'BP002',
      driverId: 'DRV002',
      driverName: 'Jane Smith',
      date: '2024-03-19',
      type: 'penalty',
      amount: 200,
      reason: 'Late arrival',
      status: 'pending',
      approvedBy: null
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatusChange = (id, newStatus) => {
    // Implement status change logic
    console.log(`Changing status of ${id} to ${newStatus}`);
  };

  return (
    <div className="bonuses-penalties-section">
      <h3>Bonuses & Penalties</h3>
      
      <div className="filter-section">
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
          placeholder="Filter by date"
        />
        <select
          name="type"
          value={filter.type}
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>
          <option value="bonus">Bonus</option>
          <option value="penalty">Penalty</option>
        </select>
        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="table-container">
        <table className="bonuses-penalties-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Driver</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>
                  <div className="driver-info">
                    <span className="driver-name">{transaction.driverName}</span>
                    <span className="driver-id">{transaction.driverId}</span>
                  </div>
                </td>
                <td>
                  <span className={`type-badge ${transaction.type}`}>
                    {transaction.type}
                  </span>
                </td>
                <td className={transaction.type === 'penalty' ? 'penalty-amount' : 'bonus-amount'}>
                  ₹{transaction.amount}
                </td>
                <td>{transaction.reason}</td>
                <td>
                  <span className={`status-badge ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  {transaction.status === 'pending' && (
                    <div className="action-buttons">
                      <button
                        className="approve-btn"
                        onClick={() => handleStatusChange(transaction.id, 'approved')}
                      >
                        Approve
                      </button>
                      <button
                        className="reject-btn"
                        onClick={() => handleStatusChange(transaction.id, 'rejected')}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BonusesPenalties; 