import { Hotel } from '../../../types/hotel';
import { capitalizeFirstLetter } from '../../../utils/index';
import {MAX_RATING} from '../../../utils/const';


type FavoriteCardProps = {
  hotel: Hotel;
};


function FavoriteCard({ hotel }: FavoriteCardProps): JSX.Element {
  const { price, type, title, isPremium, rating } = hotel;
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
          <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
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
          <a href="#0">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizedType}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
