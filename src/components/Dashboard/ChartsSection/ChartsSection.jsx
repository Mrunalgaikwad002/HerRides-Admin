import React from 'react';
import './ChartsSection.css';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function ChartsSection() {

  const weeklyRevenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 3000, 4000, 3500, 6000, 9000, 7000],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
    ],
  };

  const weeklyRevenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Weekly Revenue Trends',
      },
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: false,
                text: 'Revenue (₹)'
            }
        },
        x: {
            title: {
                display: false,
                text: 'Day'
            }
        }
    }
  };

  const hourlyRidesData = {
    labels: ['6-9AM', '9AM-12PM', '12PM-3PM', '3PM-6PM', '6PM-9PM', '9PM-12AM', '12AM-6AM'],
    datasets: [
      {
        label: 'Number of Rides',
        data: [60, 40, 45, 100, 35, 50, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const hourlyRidesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Hourly Rides Comparison',
      },
    },
     scales: {
        y: {
            beginAtZero: true,
            title: {
                display: false,
                text: 'Number of Rides'
            }
        },
        x: {
            title: {
                display: false,
                text: 'Time Period'
            }
        }
    }
  };

  return (
    <div className="charts-section">
      {/* Weekly Revenue */}
      <div className="chart-card">
        <h3>Weekly Revenue</h3>
        <Line data={weeklyRevenueData} options={weeklyRevenueOptions} />
      </div>

      {/* Hourly Rides */}
      <div className="chart-card">
        <h3>Hourly Rides</h3>
        <Bar data={hourlyRidesData} options={hourlyRidesOptions} />
      </div>
    </div>
  );
}

export default ChartsSection; 