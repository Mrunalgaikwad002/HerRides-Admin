import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import DriverList from './DriverList/DriverList';
import TripPayments from './TripPayments/TripPayments';
import WalletManagement from './WalletManagement/WalletManagement';
import PayoutManagement from './PayoutManagement/PayoutManagement';
import CommissionControl from './CommissionControl/CommissionControl';
import BonusesPenalties from './BonusesPenalties/BonusesPenalties';
import PaymentLogs from './PaymentLogs/PaymentLogs';
import AdminLogs from './AdminLogs/AdminLogs';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <Sidebar />
      <div className="payment-content">
        <h2>Payment Management</h2>
        <div className="payment-sections">
          <DriverList />
          <TripPayments />
          <WalletManagement />
          <PayoutManagement />
          <CommissionControl />
          <BonusesPenalties />
          <PaymentLogs />
          <AdminLogs />
        </div>
      </div>
    </div>
  );
};

export default Payment; 