import React, { useState } from 'react';
import './PayoutManagement.css';

const PayoutManagement = () => {
  const [filter, setFilter] = useState({
    date: '',
    status: '',
    driverId: ''
  });

  const [payouts] = useState([
    {
      id: 'PAY001',
      driverId: 'DRV001',
      driverName: 'John Doe',
      date: '2024-03-20',
      amount: 4500,
      bankDetails: {
        accountNumber: 'XXXX1234',
        bankName: 'HDFC Bank',
        ifscCode: 'HDFC0001234'
      },
      status: 'pending',
      processedBy: null
    },
    {
      id: 'PAY002',
      driverId: 'DRV002',
      driverName: 'Jane Smith',
      date: '2024-03-19',
      amount: 3200,
      bankDetails: {
        accountNumber: 'XXXX5678',
        bankName: 'ICICI Bank',
        ifscCode: 'ICIC0005678'
      },
      status: 'completed',
      processedBy: 'Admin User'
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProcessPayout = (payoutId) => {
    // Implement payout processing logic
    console.log(`Processing payout ${payoutId}`);
  };

  return (
    <div className="payout-management-section">
      <h3>Payout Management</h3>
      
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
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="table-container">
        <table className="payout-table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Driver Details</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Bank Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map(payout => (
              <tr key={payout.id}>
                <td>{payout.id}</td>
                <td>
                  <div className="driver-info">
                    <span className="driver-name">{payout.driverName}</span>
                    <span className="driver-id">{payout.driverId}</span>
                  </div>
                </td>
                <td>{payout.date}</td>
                <td>₹{payout.amount}</td>
                <td>
                  <div className="bank-details">
                    <span>{payout.bankDetails.bankName}</span>
                    <span>A/C: {payout.bankDetails.accountNumber}</span>
                    <span>IFSC: {payout.bankDetails.ifscCode}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${payout.status}`}>
                    {payout.status}
                  </span>
                </td>
                <td>
                  {payout.status === 'pending' && (
                    <button
                      className="process-btn"
                      onClick={() => handleProcessPayout(payout.id)}
                    >
                      Process
                    </button>
                  )}
                  {payout.status === 'completed' && (
                    <span className="processed-by">
                      By: {payout.processedBy}
                    </span>
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

export default PayoutManagement; 