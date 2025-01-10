import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map({ center, zoom = 13, markers = [] }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize map if it hasn't been initialized yet
    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      // Add markers
      markers.forEach(marker => {
        L.marker(marker.position)
          .bindPopup(marker.popup || '')
          .addTo(mapInstanceRef.current);
      });
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array since we don't want to re-initialize the map

  return (
    <div 
      ref={mapRef} 
      className="map-container" 
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <noscript>Please enable JavaScript to view the map.</noscript>
    </div>
  );
}
