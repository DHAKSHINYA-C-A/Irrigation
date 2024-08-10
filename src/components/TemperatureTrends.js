import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../TemperatureTrends.css';

function TemperatureTrends() {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [22, 24, 21, 23, 26, 25, 27],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="temperature-trends">
      <h2>Temperature Trends (Past 7 Days)</h2>
      <Bar data={data} />
    </div>
  );
}

export default TemperatureTrends;
