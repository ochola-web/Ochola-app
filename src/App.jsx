// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TripProvider } from './context/TripContext';
import TripPlanner from './pages/TripPlanner';

function App() {
  return (
    <TripProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TripPlanner />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
        </Routes>
      </Router>
    </TripProvider>
  );
}

export default App;
