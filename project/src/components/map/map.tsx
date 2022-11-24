import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Hotel} from '../../types/hotel';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../utils/const';

type MapProps = {
  hotels: Hotel[];
  selectedOffer?: number;
}

function Map({hotels, selectedOffer}: MapProps): JSX.Element {
  const city = hotels[0].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, {city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      hotels.forEach((hotel) => {
        leaflet
          .marker([
            hotel.location.latitude,
            hotel.location.longitude,
          ], {icon: (hotel.id === selectedOffer) ? currentCustomIcon : defaultCustomIcon})
          .addTo(map);
      });
    }
  }, [map, selectedOffer]);

  return (
    <div
      style={{ height: '512px' }}
      ref={mapRef}
    />
  );
}

export default Map;
