import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Correção necessária: o bundler (Vite) não resolve os ícones padrão do Leaflet automaticamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const POSITION = [-7.131172, -34.821883]; // Av. Cabo Branco, 1.780 — João Pessoa, PB

export default function MapContact() {
  return (
    <div className="mt-6 h-48 w-full max-w-xs overflow-hidden rounded-md border border-white/10">
      <MapContainer
        center={POSITION}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION}>
          <Popup>
            CartoGeo <br /> Av. Cabo Branco, 1.780, Loja 12
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
