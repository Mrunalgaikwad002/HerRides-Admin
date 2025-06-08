import React from 'react';

const PaymentSummary = ({ totalEarnings, totalPayments, netBalance }) => {
  return (
    <div className="summary-cards">
      <div className="summary-card earnings">
        <h3>Total Earnings</h3>
        <p className="amount">${totalEarnings.toFixed(2)}</p>
      </div>
      <div className="summary-card payments">
        <h3>Total Payments</h3>
        <p className="amount">${totalPayments.toFixed(2)}</p>
      </div>
      <div className="summary-card balance">
        <h3>Net Balance</h3>
        <p className="amount">${netBalance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentSummary; 