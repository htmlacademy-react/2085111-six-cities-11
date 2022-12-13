import {store} from '../store/index.js';
import { AuthorizationStatus } from '../utils/const.js';
import { Comment } from './comment.js';
import { Hotel } from './hotel.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
}

export type OffersProcess = {
  city: string;
  offers: Hotel[];
  currentOffer: Hotel;
  isOffersDataLoading: boolean;
  nearbyOffers: Hotel[];
  favoriteOffers: Hotel[];
  favoritesCounter: number;
}

export type CommentsProcess = {
  currentComments: Comment[];
  isPostingLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
