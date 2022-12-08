import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY, AuthorizationStatus } from '../utils/const';
import { Hotel } from '../types/hotel';

type InitialState = {
  city: string;
  offers: Hotel[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
