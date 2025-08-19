// src/context/TripContext.jsx
import React, { createContext, useState } from 'react';

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
    setSelectedTrip(trip);
  };

  const deleteTrip = (id) => {
    const updatedTrips = trips.filter((t) => t.id !== id);
    setTrips(updatedTrips);
    setSelectedTrip(null);
  };

  const selectTrip = (trip) => setSelectedTrip(trip);

  return (
    <TripContext.Provider value={{ trips, addTrip, selectedTrip, selectTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  );
};
