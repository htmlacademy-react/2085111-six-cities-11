import { Link } from 'react-router-dom';
import { Hotel } from '../../../types/hotel';
import { capitalizeFirstLetter, сalculateRating } from '../../../utils/index';
import { AppRoute, AuthorizationStatus } from '../../../utils/const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { redirectToRoute } from '../../../store/action';
import { setFavoriteStatusAction } from '../../../store/api-actions';
import cn from 'classnames';

const NON_EXISTENT_ID = -1;

type PlaceCardProps = {
  hotel: Hotel;
  cardClickHandler?: (id: number) => void;
}

function PlaceCard({ hotel, cardClickHandler }: PlaceCardProps): JSX.Element {
  const { price, type, title, isPremium, isFavorite, rating, id, previewImage } = hotel;
  const capitalizedType = capitalizeFirstLetter(type);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const onMouseEnter = () => {
    cardClickHandler && cardClickHandler(id);
  };

  const onMouseLeave = () => {
    cardClickHandler && cardClickHandler(NON_EXISTENT_ID);
  };

  const hadnleFavoriteButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }

    dispatch(setFavoriteStatusAction({
      id: id,
      status: !isFavorite,
    }));
  };

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#0">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn('place-card__bookmark-button button', {'place-card__bookmark-button--active': isFavorite})} type="button" onClick={hadnleFavoriteButtonClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${сalculateRating(rating)}%` }}></span>
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

export default PlaceCard;
