import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Hotel } from '../../types/hotel';
import useMap from '../../hooks/use-map';

type MapProps = {
  hotels: Hotel[];
}

function Map({ hotels }: MapProps): JSX.Element {
  const city = hotels[0].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, { city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      hotels.forEach((hotel) => {
        leaflet
          .marker([
            hotel.location.latitude,
            hotel.location.longitude,
          ], {icon: defaultCustomIcon})
          .addTo(map);
      });
    }
  }, [map]);

  return (
    <div
      style={{ height: '512px' }}
      ref={mapRef}
    />
  );
}

export default Map;
