import {MAX_RATING} from './const';

const capitalizeFirstLetter = (str: string): string => {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
};

const сalculateRating = (rating: number): number => (Math.round(rating) / MAX_RATING) * 100;

export {capitalizeFirstLetter, сalculateRating};
