// src/components/RouteMap.jsx
import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-polylinedecorator'; // arrow plugin
import { TripContext } from '../context/TripContext';
import './routemap.css';

// Component to add arrows to polyline
const ArrowDecorator = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (!positions || positions.length < 1) return;

    // Create arrow decorator
    const arrow = L.polylineDecorator(L.polyline(positions), {
      patterns: [
        {
          offset: 25, // distance before first arrow
          repeat: 50, // distance between arrows
          symbol: L.Symbol.arrowHead({
            pixelSize: 10,
            polygon: false,
            pathOptions: { stroke: true, color: '#007bff' }
          })
        }
      ]
    });

    arrow.addTo(map);

    return () => {
      map.removeLayer(arrow);
    };
  }, [positions, map]);

  return null;
};

const RouteMap = () => {
  const { selectedTrip } = useContext(TripContext);

  if (!selectedTrip)
    return <div className="route-map"><p>No trip to display on map</p></div>;

  // Example static coordinates (replace with geocoding later)
  const kenyaCenter = [0.0236, 37.9062];
  const originCoords = [-1.286389, 36.817223]; // Nairobi
  const destinationCoords = [-4.043477, 39.668206]; // Mombasa

  const positions = [originCoords, destinationCoords];

  return (
    <div className="route-map">
      <h2>Route Map</h2>
      <MapContainer center={kenyaCenter} zoom={6} style={{ height: '300px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={originCoords}>
          <Popup>{selectedTrip.origin}</Popup>
        </Marker>
        <Marker position={destinationCoords}>
          <Popup>{selectedTrip.destination}</Popup>
        </Marker>

        {/* Draw route line */}
        <Polyline positions={positions} color="#007bff" />

        {/* Add arrows to route */}
        <ArrowDecorator positions={positions} />
      </MapContainer>
    </div>
  );
};

export default RouteMap;
