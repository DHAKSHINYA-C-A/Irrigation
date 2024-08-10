import React from 'react';
import '../ReportButton.css';

function ReportButton() {
  const generateReport = () => {
    // Function to generate the report
    alert('Report Generated!');
  };

  return (
    <div className="report-button">
      <button onClick={generateReport}>Generate Report</button>
    </div>
  );
}

export default ReportButton;
