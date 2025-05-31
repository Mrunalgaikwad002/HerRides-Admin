import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import StatsGrid from './StatsGrid/StatsGrid';
import ChartsSection from './ChartsSection/ChartsSection';
import BottomSection from './BottomSection/BottomSection';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header>
          <h1>Dashboard</h1>
          {/* Add header icons here */}
        </header>
        <StatsGrid />
        <ChartsSection />
        <BottomSection />
      </div>
    </div>
  );
}

export default Dashboard; 