// src/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Map = ({ lat, long }) => {
  if (lat === undefined || long === undefined) {
    return <div>Loading map...</div>; // or return null
  }

  const position = [lat, long];

  return (
    <div style={{ position: 'relative', zIndex: '0' }}>
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%', zIndex: '0' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
