import { Hotel } from '../../../types/hotel';
import { capitalizeFirstLetter } from '../../../utils/index';
import {AppRoute, MAX_RATING} from '../../../utils/const';
import { Link } from 'react-router-dom';


type FavoriteCardProps = {
  hotel: Hotel;
  favoriteButtonClickHandler: (id: number, isFavorite: boolean) => void;
};


function FavoriteCard({ hotel, favoriteButtonClickHandler }: FavoriteCardProps): JSX.Element {
  const { price, type, title, isPremium, rating, previewImage, id, isFavorite } = hotel;
  const ratingPersent = (Math.round(rating) / MAX_RATING) * 100;
  const capitalizedType = capitalizeFirstLetter(type);

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#0">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={() => favoriteButtonClickHandler(id, isFavorite)}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPersent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizedType}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
