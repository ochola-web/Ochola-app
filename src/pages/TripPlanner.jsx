import React from 'react';
import TripForm from '../components/TripForm';
import TripDetail from '../components/TripDetail';
import RouteMap from '../components/RouteMap';
import AssignedTripList from '../components/AssignedTripList';
import TripCalendar from '../components/TripCalendar';
import TripSummaryChart from '../components/TripSummaryChart';
import './tripplanner.css';

const TripPlanner = () => {
  return (
    <div className="trip-planner">
      <h1 className="trip-planner-title">Fleet Trip Planner</h1>
      <TripForm />
      <TripDetail />
      <RouteMap />
      <AssignedTripList />
      <TripCalendar />
      <TripSummaryChart />
    </div>
  );
};

export default TripPlanner;
