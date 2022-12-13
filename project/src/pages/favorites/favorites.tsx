import { Helmet } from 'react-helmet-async';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-process/selectors';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import FavoriteEmptyList from '../../components/favorite-list/favorite-empty-list/favorite-empty-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { setFavoriteStatusAction } from '../../store/api-actions';
import { Hotel } from '../../types/hotel';
import { changeFavoritesCounter } from '../../store/offers-process/offers-process';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const hotels = useAppSelector(getFavoriteOffers);

  const [favoriteOffers, setFavoriteOffers] = useState<Hotel[]>(hotels);

  useEffect(() => {
    setFavoriteOffers(hotels);
  },[hotels]);

  const favoriteButtonClickHandler = (id: number, isFavorite: boolean) => {
    dispatch(setFavoriteStatusAction({
      id: id,
      status: !isFavorite,
    }));
    dispatch(changeFavoritesCounter(!isFavorite));
    setFavoriteOffers(favoriteOffers.filter((hotel) => hotel.id !== id));
  };

  return (
    <div className={cn('page', {'page--favorites-empty': !hotels.length})}>
      <Helmet>
        <title>Favorite Hotels | 6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Header />
          </div>
        </div>
      </header>

      {favoriteOffers.length ?
        (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList hotels={favoriteOffers} favoriteButtonClickHandler={favoriteButtonClickHandler} />
              </section>
            </div>
          </main>
        ) :
        (
          <FavoriteEmptyList />
        )}

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
