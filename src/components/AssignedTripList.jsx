// src/components/AssignedTripList.jsx
import React, { useContext } from "react";
import { TripContext } from "../context/TripContext";
import "./AssignedTripList.css";

const AssignedTripList = () => {
  const { trips, setSelectedTrip } = useContext(TripContext);

  return (
    <div className="assigned-trip-list">
      <h2>Assigned Trips</h2>
      {trips.length === 0 ? (
        <p>No trips assigned yet.</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id} onClick={() => setSelectedTrip(trip)}>
              {trip.destination} - {trip.date} ({trip.driver})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignedTripList;
