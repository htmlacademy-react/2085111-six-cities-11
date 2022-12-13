import PlaceCard from './place-card/place-card';
import {Hotel} from '../../types/hotel';
import Sort from '../sort/sort';
import {sortingOffers} from '../../utils';
import {useEffect, useState} from 'react';
import {sortTypes} from '../../utils/const';

type OffersListProps = {
  hotels: Hotel[];
  city: string;
  cardClickHandler: (id: number) => void;
};

function OffersList({hotels, city, cardClickHandler}: OffersListProps): JSX.Element {
  const [sortedHotels, setSortedHotels] = useState(Array.from(hotels));
  const [sortingName, setSortingName] = useState(sortTypes.POPULAR);

  const sortTypeClickHandler = (sortName: string) => {
    setSortingName(sortName);
  };

  useEffect(() => {
    setSortedHotels(sortingOffers(Array.from(hotels), sortingName));
  }, [sortingName, city, hotels]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotels.length} places to stay in {city}</b>
      <Sort sortTypeClickHandler={sortTypeClickHandler} />
      <div className="cities__places-list places__list tabs__content">
        {(sortingName === sortTypes.POPULAR ? hotels : sortedHotels).map((hotel: Hotel) => <PlaceCard hotel={hotel} key={hotel.id} cardClickHandler={cardClickHandler} />)}
      </div>
    </section>
  );
}

export default OffersList;
