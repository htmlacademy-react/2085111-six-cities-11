import {Hotel} from '../../../types/hotel';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteItemProps = {
  hotelsOfOneCity: Hotel[];
  favoriteButtonClickHandler: (id: number, isFavorite: boolean) => void;
};

function FavoriteItem({hotelsOfOneCity, favoriteButtonClickHandler}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#0">
            <span>{hotelsOfOneCity[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotelsOfOneCity.map((hotel: Hotel) => <FavoriteCard hotel={hotel} favoriteButtonClickHandler={favoriteButtonClickHandler} key={hotel.id} />)}
      </div>
    </li>
  );
}

export default FavoriteItem;
