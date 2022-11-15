import {Hotel} from '../../types/hotel';
import FavoriteItem from './favorite-item/favorite-item';

type FavoriteListProps = {
  hotels: Hotel[];
}

function FavoriteList({hotels}: FavoriteListProps): JSX.Element {
  const cities = hotels.map((hotel) => hotel.city.name);
  const uniqCities = new Set(cities);
  const favoriteCities = Array.from(uniqCities);
  favoriteCities.sort();

  const renderHotelsOfEarchCity = (city: string) => {
    const hotelsOfOneCity = hotels.filter((hotel) => hotel.city.name === city);

    return (
      <FavoriteItem hotelsOfOneCity={hotelsOfOneCity} key={city} />
    );
  };

  return (
    <ul className="favorites__list">
      {favoriteCities.map((city) => renderHotelsOfEarchCity(city))}
    </ul>
  );
}

export default FavoriteList;
