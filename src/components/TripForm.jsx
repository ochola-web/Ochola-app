// src/components/TripForm.jsx
import React, { useState, useContext } from 'react';
import { TripContext } from '../context/TripContext';
import './tripform.css';

const TripForm = () => {
  const { addTrip } = useContext(TripContext);
  const [form, setForm] = useState({
    type: '',
    origin: '',
    destination: '',
    date: '',
    time: '',
    vehicle: '',
    driver: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      ...form,
      id: Date.now(),
    };
    addTrip(newTrip);
    setForm({ type: '', origin: '', destination: '', date: '', time: '', vehicle: '', driver: '' });
  };

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <h2>New Trip</h2>
      <input name="type" value={form.type} onChange={handleChange} placeholder="Trip Type" required />
      <input name="origin" value={form.origin} onChange={handleChange} placeholder="Origin" required />
      <input name="destination" value={form.destination} onChange={handleChange} placeholder="Destination" required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="time" type="time" value={form.time} onChange={handleChange} required />
      <input name="vehicle" value={form.vehicle} onChange={handleChange} placeholder="Vehicle No" required />
      <input name="driver" value={form.driver} onChange={handleChange} placeholder="Driver Name" required />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
