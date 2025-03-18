import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const center = [-1.9501, 30.0588]; // Example: Kigali, Rwanda

export default function MapComponent() {
  return (
    <MapContainer center={center} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>Kigali, Rwanda</Popup>
      </Marker>
    </MapContainer>
  );
}