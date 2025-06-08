import React from 'react';

const PaymentTable = ({ transactions }) => {
  return (
    <div className="table-container">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Description</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={transaction.type}>
              <td>{transaction.date}</td>
              <td>
                <span className={`type-badge ${transaction.type}`}>
                  {transaction.type === 'earning' ? 'Earning' : 'Payment'}
                </span>
              </td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>
                <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.description}</td>
              <td>
                {transaction.type === 'earning' ? (
                  <span>Ride: {transaction.rideId}</span>
                ) : (
                  <span>{transaction.paymentMethod}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable; 