import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

export default function Mapa() {
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permissão negada');
      return;
    }

    const currentLocation =
      await Location.getCurrentPositionAsync({});

    setLocation(currentLocation.coords);
  }

  if (!location) {
    return null;
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet/dist/leaflet.css"
      />

      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>

    <body>
      <div id="map"></div>

      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

      <script>
        const map = L.map('map').setView(
          [${location.latitude}, ${location.longitude}],
          15
        );

        L.tileLayer(
          'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: '© OpenStreetMap'
          }
        ).addTo(map);

        L.marker([${location.latitude}, ${location.longitude}])
          .addTo(map)
          .bindPopup('Você está aqui')
          .openPopup();
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html }}
      style={{ flex: 1 }}
    />
  );
}