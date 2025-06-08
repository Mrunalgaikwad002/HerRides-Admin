import React, { useState } from 'react';
import './WalletManagement.css';

const WalletManagement = () => {
  const [filter, setFilter] = useState({
    date: '',
    driverId: '',
    type: ''
  });

  const [wallets] = useState([
    {
      id: 'WALLET001',
      driverId: 'DRV001',
      driverName: 'John Doe',
      balance: 5000,
      transactions: [
        {
          id: 'TXN001',
          date: '2024-03-20',
          type: 'credit',
          amount: 1500,
          description: 'Trip earnings',
          status: 'completed'
        },
        {
          id: 'TXN002',
          date: '2024-03-19',
          type: 'debit',
          amount: 500,
          description: 'Withdrawal',
          status: 'pending'
        }
      ]
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWithdraw = (walletId) => {
    // Implement withdrawal logic
    console.log(`Processing withdrawal for wallet ${walletId}`);
  };

  return (
    <div className="wallet-management-section">
      <h3>Wallet Management</h3>
      
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
          name="type"
          value={filter.type}
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <div className="wallets-grid">
        {wallets.map(wallet => (
          <div key={wallet.id} className="wallet-card">
            <div className="wallet-header">
              <div className="driver-info">
                <span className="driver-name">{wallet.driverName}</span>
                <span className="driver-id">{wallet.driverId}</span>
              </div>
              <div className="wallet-balance">
                <span className="balance-label">Current Balance</span>
                <span className="balance-amount">₹{wallet.balance}</span>
              </div>
            </div>

            <div className="wallet-actions">
              <button
                className="withdraw-btn"
                onClick={() => handleWithdraw(wallet.id)}
                disabled={wallet.balance <= 0}
              >
                Withdraw
              </button>
            </div>

            <div className="transactions-list">
              <h4>Recent Transactions</h4>
              {wallet.transactions.map(transaction => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-info">
                    <span className="transaction-date">{transaction.date}</span>
                    <span className="transaction-description">{transaction.description}</span>
                  </div>
                  <div className="transaction-details">
                    <span className={`amount ${transaction.type}`}>
                      {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                    </span>
                    <span className={`status-badge ${transaction.status}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletManagement; 