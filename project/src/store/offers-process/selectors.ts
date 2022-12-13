import { Hotel } from '../../types/hotel';
import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';


export const getOffers = (state: State): Hotel[] => state[NameSpace.Offers].offers;
export const getCurrentOffer = (state: State): Hotel => state[NameSpace.Offers].currentOffer;
export const getCurrentCity = (state: State): string => state[NameSpace.Offers].city;
export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getNearbyOffers = (state: State): Hotel[] => state[NameSpace.Offers].nearbyOffers;
export const getFavoriteOffers = (state: State): Hotel[] => state[NameSpace.Offers].favoriteOffers;
export const getFavoritesCounter = (state: State): number => state[NameSpace.Offers].favoritesCounter;
