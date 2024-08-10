import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import WaterLevel from './components/WaterLevel';
import TemperatureTrends from './components/TemperatureTrends';
import RangeMeters from './components/Rangemeters';
import ReportButton from './components/ReportButton';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <div className="top-section">
          <WaterLevel />
          <TemperatureTrends />
        </div>
        <div className="bottom-section">
          <RangeMeters />
          <ReportButton />
        </div>
      </div>
    </div>
  );
}

export default App;
