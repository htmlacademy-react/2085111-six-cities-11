import PlaceCard from './place-card/place-card';
import {Hotel} from '../../types/hotel';
import Sort from '../sort/sort';
import {sortingOffers} from '../../utils';
import {useState} from 'react';

type OffersListProps = {
  hotels: Hotel[];
  city: string;
  cardClickHandler: (id: number) => void;
};

function OffersList({hotels, city, cardClickHandler}: OffersListProps): JSX.Element {
  const [sortedHotels, setSortedHotels] = useState(Array.from(hotels));

  const sortTypeClickHandler = (sortName: string) => {
    setSortedHotels(sortingOffers(sortedHotels, sortName));
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotels.length} places to stay in {city}</b>
      <Sort sortTypeClickHandler={sortTypeClickHandler} />
      <div className="cities__places-list places__list tabs__content">
        {sortedHotels.map((hotel: Hotel) => <PlaceCard hotel={hotel} key={hotel.id} cardClickHandler={cardClickHandler} />)}
      </div>
    </section>
  );
}

export default OffersList;
