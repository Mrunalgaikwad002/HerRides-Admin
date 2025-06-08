import React, { useState } from 'react';
import './PaymentLogs.css';

const PaymentLogs = () => {
  const [filter, setFilter] = useState({
    date: '',
    gateway: '',
    status: ''
  });

  const [logs] = useState([
    {
      id: 'PAY001',
      timestamp: '2024-03-20 14:30:00',
      gateway: 'Razorpay',
      transactionId: 'txn_123456',
      amount: 1500,
      currency: 'INR',
      status: 'success',
      response: 'Transaction completed successfully'
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
    <div className="payment-logs-section">
      <h3>Payment Gateway Logs</h3>
      
      <div className="filter-section">
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
          placeholder="Filter by date"
        />
        <select
          name="gateway"
          value={filter.gateway}
          onChange={handleFilterChange}
        >
          <option value="">All Gateways</option>
          <option value="razorpay">Razorpay</option>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
        </select>
        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="table-container">
        <table className="payment-logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Gateway</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.timestamp}</td>
                <td>{log.gateway}</td>
                <td>{log.transactionId}</td>
                <td>{`${log.currency} ${log.amount}`}</td>
                <td>
                  <span className={`status-badge ${log.status}`}>
                    {log.status}
                  </span>
                </td>
                <td>{log.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentLogs; 