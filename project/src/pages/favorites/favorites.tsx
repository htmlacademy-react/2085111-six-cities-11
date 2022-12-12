import { Helmet } from 'react-helmet-async';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-process/selectors';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import FavoriteEmptyList from '../../components/favorite-list/favorite-empty-list/favorite-empty-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import cn from 'classnames';

function Favorites(): JSX.Element {
  const hotels = useAppSelector(getFavoriteOffers);

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

      {hotels.length ?
        (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList hotels={hotels} />
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
