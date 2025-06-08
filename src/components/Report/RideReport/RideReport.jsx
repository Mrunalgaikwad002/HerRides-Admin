import React, { useRef } from 'react';
import './RideReport.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const sampleRides = [
  { date: '2024-06-01', rideId: 'RIDE001', driver: 'John Doe', rider: 'Jane Smith', status: 'Completed', distance: '12 km', duration: '25 min', city: 'Mumbai' },
  { date: '2024-06-01', rideId: 'RIDE002', driver: 'Priya Singh', rider: 'Amit Kumar', status: 'Cancelled', distance: '0 km', duration: '0 min', city: 'Delhi' },
  { date: '2024-06-02', rideId: 'RIDE003', driver: 'Rahul Mehra', rider: 'Sara Ali', status: 'Completed', distance: '8 km', duration: '18 min', city: 'Bangalore' },
];

const RideReport = () => {
  const tableRef = useRef();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Sample Ride Report', 14, 16);
    autoTable(doc, {
      head: [[
        'Date', 'Ride ID', 'Driver', 'Rider', 'Status', 'Distance', 'Duration', 'City'
      ]],
      body: sampleRides.map(r => [r.date, r.rideId, r.driver, r.rider, r.status, r.distance, r.duration, r.city]),
      startY: 22,
    });
    doc.save('ride-report.pdf');
  };

  return (
    <div className="ride-report-section">
      <h3>Ride Reports</h3>
      <button className="download-btn" onClick={handleDownloadPDF}>Download PDF</button>
      <div className="table-responsive" ref={tableRef}>
        <table className="ride-report-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Ride ID</th>
              <th>Driver</th>
              <th>Rider</th>
              <th>Status</th>
              <th>Distance</th>
              <th>Duration</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {sampleRides.map((ride, idx) => (
              <tr key={ride.rideId}>
                <td>{ride.date}</td>
                <td>{ride.rideId}</td>
                <td>{ride.driver}</td>
                <td>{ride.rider}</td>
                <td>{ride.status}</td>
                <td>{ride.distance}</td>
                <td>{ride.duration}</td>
                <td>{ride.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RideReport; 