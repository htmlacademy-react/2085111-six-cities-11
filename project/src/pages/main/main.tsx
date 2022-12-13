import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Logo from '../../components/logo/logo';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { getCurrentCity, getOffers } from '../../store/offers-process/selectors';
import EmptyOffersList from '../../components/empty-offers-list/empty-offers-list';
import cn from 'classnames';
import { changeCity } from '../../store/offers-process/offers-process';
import { DEFAULT_CITY } from '../../utils/const';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const [selectedOffer, setSelectedOffer] = useState<number | undefined>(undefined);

  const hotels = useAppSelector(getOffers);
  const city = useAppSelector(getCurrentCity);
  const filteredHotels = hotels.filter((offer) => offer.city.name === city);

  const cardClickHandler = (id: number) => {
    setSelectedOffer(id);
  };

  useEffect(() => {
    dispatch(changeCity(DEFAULT_CITY));
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main Page | 6 cities</title>
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

      <main className={cn('page__main page__main--index', {'page__main--index-empty': !filteredHotels.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">

          {filteredHotels.length ?
            (
              <div className="cities__places-container container">
                <OffersList hotels={filteredHotels} city={city} cardClickHandler={cardClickHandler} />
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {filteredHotels.length > 0 && <Map hotels={filteredHotels} selectedOffer={selectedOffer} />}
                  </section>
                </div>
              </div>
            ) :
            (
              <EmptyOffersList city={city} />
            )}

        </div>
      </main>
    </div>
  );
}

export default Main;
