// src/components/TripDetail.jsx
import React, { useContext } from 'react';
import { TripContext } from '../context/TripContext';
import './tripdetail.css';

const TripDetail = () => {
  const { selectedTrip, deleteTrip } = useContext(TripContext);

  if (!selectedTrip) return <div className="trip-detail"><p>No trip selected</p></div>;

  return (
    <div className="trip-detail">
      <h2>Trip Detail</h2>
      <ul>
        <li><strong>Type:</strong> {selectedTrip.type}</li>
        <li><strong>From:</strong> {selectedTrip.origin}</li>
        <li><strong>To:</strong> {selectedTrip.destination}</li>
        <li><strong>Date:</strong> {selectedTrip.date}</li>
        <li><strong>Time:</strong> {selectedTrip.time}</li>
        <li><strong>Vehicle:</strong> {selectedTrip.vehicle}</li>
        <li><strong>Driver:</strong> {selectedTrip.driver}</li>
      </ul>
      <button onClick={() => deleteTrip(selectedTrip.id)}>Delete Trip</button>
    </div>
  );
};

export default TripDetail;
