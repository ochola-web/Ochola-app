// src/components/TripCalendar.jsx
import React, { useContext } from 'react';
import { TripContext } from '../context/TripContext';
import './tripcalendar.css';

const TripCalendar = () => {
  const { trips } = useContext(TripContext);

  return (
    <div className="trip-calendar">
      <h3>Trip Calendar</h3>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            {trip.date} - {trip.type} from {trip.origin} to {trip.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripCalendar;
