import React, { useState } from 'react';
import './AppConfig.css';

const AppConfig = () => {
  const [appName, setAppName] = useState('Her Rides');
  const [logo, setLogo] = useState(null);
  const [theme, setTheme] = useState('pink-blue');
  const [version] = useState('v1.2.3');
  const [maintenance, setMaintenance] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="app-config-section">
      <h3>App Configuration</h3>
      <form className="app-config-form">
        <label>
          App Name:
          <input
            type="text"
            value={appName}
            onChange={e => setAppName(e.target.value)}
          />
        </label>

        <label>
          Upload Logo:
          <input type="file" accept="image/*" onChange={handleLogoChange} />
          {logo && <img src={logo} alt="App Logo" className="app-logo-preview" />}
        </label>

        <label>
          Primary Color Theme:
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="pink-blue">Pink & Blue</option>
            <option value="purple-orange">Purple & Orange</option>
            <option value="green-yellow">Green & Yellow</option>
          </select>
        </label>

        <label>
          App Version:
          <input type="text" value={version} disabled />
        </label>

        <label className="toggle-label">
          Maintenance Mode:
          <input
            type="checkbox"
            checked={maintenance}
            onChange={e => setMaintenance(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <small className="desc">Temporarily disable new rides while keeping old rides running.</small>

        <label>
          Default Language:
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            {/* Add more languages as needed */}
          </select>
        </label>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default AppConfig; 