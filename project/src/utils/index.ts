import { MAX_RATING } from './const';
import { Hotel } from '../types/hotel';
import { sortTypes } from './const';

const capitalizeFirstLetter = (str: string): string => {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
};

const сalculateRating = (rating: number): number => (Math.round(rating) / MAX_RATING) * 100;

const sortingOffers = (hotels: Hotel[], sortName: string) => {
  if (hotels.length > 1) {
    switch (sortName) {
      case sortTypes.PRICE_LOW:
        return hotels.sort((hotelA, hotelB) => hotelA.price - hotelB.price);
      case sortTypes.PRICE_HIGH:
        return hotels.sort((hotelA, hotelB) => hotelB.price - hotelA.price);
      case sortTypes.RATING:
        return hotels.sort((hotelA, hotelB) => hotelB.rating - hotelA.rating);
      default:
        return hotels;
    }
  }
  return hotels;
};

export { capitalizeFirstLetter, сalculateRating, sortingOffers };
