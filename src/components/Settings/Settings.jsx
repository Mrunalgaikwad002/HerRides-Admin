import React, { useState } from 'react';
import './Settings.css';
import AppConfig from './AppConfig/AppConfig';
import DriverRules from './DriverRules/DriverRules';
import RiderRules from './RiderRules/RiderRules';
import FareSettings from './FareSettings/FareSettings';
import SafetySettings from './SafetySettings/SafetySettings';
import PaymentSettings from './PaymentSettings/PaymentSettings';
import NotificationSettings from './NotificationSettings/NotificationSettings';
import LocationSettings from './LocationSettings/LocationSettings';
import DocumentSettings from './DocumentSettings/DocumentSettings';
import AdminAccess from './AdminAccess/AdminAccess';
import APISettings from './APISettings/APISettings';
import AppStoreLinks from './AppStoreLinks/AppStoreLinks';
import LegalPolicies from './LegalPolicies/LegalPolicies';
// Import other settings components as you scaffold them

const tabs = [
  { label: 'App Configuration', component: <AppConfig /> },
  { label: 'Driver Rules', component: <DriverRules /> },
  { label: 'Rider Rules', component: <RiderRules /> },
  { label: 'Fare Settings', component: <FareSettings /> },
  { label: 'Safety Settings', component: <SafetySettings /> },
  { label: 'Payment Settings', component: <PaymentSettings /> },
  { label: 'Notification & Alerts', component: <NotificationSettings /> },
  { label: 'Location & Geo Settings', component: <LocationSettings /> },
  { label: 'Document/KYC Settings', component: <DocumentSettings /> },
  { label: 'Admin Access & Roles', component: <AdminAccess /> },
  { label: 'API & Third-party Integration', component: <APISettings /> },
  { label: 'App Store Links', component: <AppStoreLinks /> },
  { label: 'Legal & Policies', component: <LegalPolicies /> },
  // Add more tabs as you scaffold the components
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="settings-dashboard">
      <h2>Settings Dashboard</h2>
      <div className="settings-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`settings-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="settings-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default Settings; 