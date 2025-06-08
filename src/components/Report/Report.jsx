import React, { useState } from 'react';
import './Report.css';
import RideReport from './RideReport/RideReport';
import EarningsReport from './EarningsReport/EarningsReport';
import DriverActivityReport from './DriverActivityReport/DriverActivityReport';
import RiderBehaviorReport from './RiderBehaviorReport/RiderBehaviorReport';
import ComplaintsReport from './ComplaintsReport/ComplaintsReport';
import SOSReport from './SOSReport/SOSReport';
import BonusIncentiveReport from './BonusIncentiveReport/BonusIncentiveReport';
import SystemHealthReport from './SystemHealthReport/SystemHealthReport';

const tabs = [
  { label: 'Ride Reports', component: <RideReport /> },
  { label: 'Earnings Reports', component: <EarningsReport /> },
  { label: 'Driver Activity', component: <DriverActivityReport /> },
  { label: 'Rider Behavior', component: <RiderBehaviorReport /> },
  { label: 'Complaints & Low Rating', component: <ComplaintsReport /> },
  { label: 'SOS & Safety', component: <SOSReport /> },
  { label: 'Bonuses & Incentives', component: <BonusIncentiveReport /> },
  { label: 'System Health', component: <SystemHealthReport /> },
];

const Report = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="report-dashboard">
      <h2>Reports Dashboard</h2>
      <div className="report-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`report-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="report-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default Report; 