import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function Map(props) {
  // eslint-disable-next-line no-unused-vars
  const [mapPosition, setMapPosition] = useState([0, 40]);
  const { cities } = useCities();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat") || 0;
  const mapLng = searchParams.get("lng") || 40;

  useEffect(() => {
    setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <DetectClick />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat, mapLng]} />
      </MapContainer>
    </div>
  );
}

ChangeCenter.propTypes = {
  position: PropTypes.array.isRequired,
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      return navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
