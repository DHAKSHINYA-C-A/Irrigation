import React from 'react';
import '../RangeMeters.css';

function RangeMeter({ label, value }) {
  return (
    <div className="range-meter">
      <h3>{label}</h3>
      <input type="range" min="0" max="100" value={value} readOnly />
    </div>
  );
}

function RangeMeters() {
  return (
    <div className="range-meters">
      <RangeMeter label="Humidity" value="75" />
      <RangeMeter label="Moisture" value="65" />
      <RangeMeter label="Soil Dryness" value="50" />
      <RangeMeter label="Battery" value="90" />
    </div>
  );
}

export default RangeMeters;
