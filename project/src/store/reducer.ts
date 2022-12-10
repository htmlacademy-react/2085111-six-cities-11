import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadComments, loadNearbyOffers, loadOffer, loadOffers, requireAuthorization, setEmail, setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY, AuthorizationStatus, currentOffer } from '../utils/const';
import { Hotel } from '../types/hotel';
import { Comment } from '../types/comment';

type InitialState = {
  city: string;
  offers: Hotel[];
  currentOffer: Hotel;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  email: string;
  currentComments: Comment[];
  nearbyOffers: Hotel[];
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentOffer: currentOffer,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  email: '',
  currentComments: [],
  nearbyOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});
