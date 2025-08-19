// src/components/TripSummaryChart.jsx
import React, { useContext } from 'react';
import { TripContext } from '../context/TripContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './tripsummarychart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TripSummaryChart = () => {
  const { trips } = useContext(TripContext);

  const tripTypes = trips.reduce((acc, trip) => {
    acc[trip.type] = (acc[trip.type] || 0) + 2;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(tripTypes),
    datasets: [
      {
        label: 'Trips by Type',
        data: Object.values(tripTypes),
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      },
    ],
  };

  return (
    <div className="trip-summary-chart">
      <h2>Trip Summary</h2>
      <Pie data={data} />
    </div>
  );
};

export default TripSummaryChart;
