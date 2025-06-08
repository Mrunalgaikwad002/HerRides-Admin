import React, { useState } from 'react';
import './AdminLogs.css';

const AdminLogs = () => {
  const [filter, setFilter] = useState({
    date: '',
    action: '',
    admin: ''
  });

  const [logs] = useState([
    {
      id: 'LOG001',
      timestamp: '2024-03-20 14:30:00',
      adminName: 'Admin User',
      action: 'Updated driver commission',
      details: 'Changed commission rate for driver DRV001 from 10% to 12%',
      ipAddress: '192.168.1.1',
      status: 'success'
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
    <div className="admin-logs-section">
      <h3>Admin Activity Logs</h3>
      
      <div className="filter-section">
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
          placeholder="Filter by date"
        />
        <select
          name="action"
          value={filter.action}
          onChange={handleFilterChange}
        >
          <option value="">All Actions</option>
          <option value="commission">Commission Update</option>
          <option value="payout">Payout Process</option>
          <option value="bonus">Bonus/Penalty</option>
          <option value="wallet">Wallet Update</option>
        </select>
        <input
          type="text"
          name="admin"
          value={filter.admin}
          onChange={handleFilterChange}
          placeholder="Filter by Admin"
        />
      </div>

      <div className="table-container">
        <table className="admin-logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Admin</th>
              <th>Action</th>
              <th>Details</th>
              <th>IP Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.timestamp}</td>
                <td>{log.adminName}</td>
                <td>{log.action}</td>
                <td>{log.details}</td>
                <td>{log.ipAddress}</td>
                <td>
                  <span className={`status-badge ${log.status}`}>
                    {log.status}
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

export default AdminLogs; 