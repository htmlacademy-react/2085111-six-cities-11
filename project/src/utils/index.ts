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
    return hotels;
    // hotels.sort((hotelA, hotelB) => hotelA.rating - hotelB.rating);
    // switch (sortName) {
    //   case sortTypes[1]:
    //     return hotels;
    //     // .sort((hotelA, hotelB) => hotelA.price - hotelB.price);
    //   // case sortTypes[2]:
    //   //   return hotels.sort((hotelA, hotelB) => hotelB.price - hotelA.price);
    //   // case sortTypes[3]:
    //   //   return hotels.sort((hotelA, hotelB) => hotelA.rating - hotelB.rating);
    //   default:
    //     return hotels;
    // }
  }
  return hotels;
};

export { capitalizeFirstLetter, сalculateRating, sortingOffers };
