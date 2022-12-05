import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffersList} from './action';
import {hotels} from '../mocks/hotels';
import {DEFAULT_CITY} from '../utils/const';

const initialState = {
  city: DEFAULT_CITY,
  offers: hotels,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersList, (state) => {
      state.offers = hotels.filter((offer) => offer.city.name === state.city);
    });
});
