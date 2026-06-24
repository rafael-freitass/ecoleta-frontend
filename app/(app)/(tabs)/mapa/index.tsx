import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { useAssets } from 'expo-asset';

import { useProduct } from "@/context/ProductContext";
import { gerarMarcadores } from "@/utils/mapUtils";
import { buscarTodosPontos, buscarPontoPorTipo, Ponto } from "@/api/pontoColeta/pontoColeta";
import { iconesMarcador } from "./components/MapMaker/mapMarker";

export default function Mapa() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const { selectedProduct } = useProduct();

  const [assets] = useAssets([
    iconesMarcador.ecoponto,
    iconesMarcador.parceiro,
    iconesMarcador.loja
  ]);

  useEffect(() => {
    carregarDados();
  }, [selectedProduct]);

  async function carregarDados() {
    await getLocation();

    let dados;

    if(selectedProduct){
      dados = await buscarPontoPorTipo(
        selectedProduct.tipo
      );
    } else {
      dados = await buscarTodosPontos();
    }

    setPontos(dados);
  }

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log("Permissão negada");
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  }

  if (!location || !assets) {
    return null;
  }

  const urlsIcones = {
    ecoponto: assets[0].localUri || assets[0].uri,
    parceiro: assets[1].localUri || assets[1].uri,
    loja: assets[2].localUri || assets[2].uri,
  };

  const markers = gerarMarcadores(pontos, urlsIcones);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        
        .leaflet-bottom {
          bottom: 60px !important;
        }

        .legenda {
          background: white;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 14px;
          line-height: 22px;
          margin-right: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }
        .titulo {
          font-weight: bold;
          margin-bottom: 6px;
        }
        .item {
          margin-top: 4px;
        }
        .bolinha {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .azul { background: #2563eb; }
        .verde { background: #16a34a; }
        .laranja { background: #f97316; }
      </style>
    </head>
    <body>
      <div id="map"></div>

      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
      <script>
        const map = L.map('map').setView([${location.latitude}, ${location.longitude}], 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([${location.latitude}, ${location.longitude}])
          .addTo(map)
          .bindPopup("Você está aqui")
          .openPopup();

        ${markers}

        const legenda = L.control({ position: 'bottomright' });

        legenda.onAdd = function() {
          const div = L.DomUtil.create('div', 'legenda');
          div.innerHTML = \`
            <div class="titulo">Legenda</div>
            <div class="item"><span class="bolinha azul"></span>Ponto Municipal</div>
            <div class="item"><span class="bolinha verde"></span>Parceiro</div>
            <div class="item"><span class="bolinha laranja"></span>Loja</div>
          \`;
          return div;
        };

        legenda.addTo(map);
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html }}
      style={{ flex: 1 }}
      allowFileAccess={true}
    />
  );
}