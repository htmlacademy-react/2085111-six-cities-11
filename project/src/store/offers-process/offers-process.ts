import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersProcess } from '../../types/state';
import { currentOffer, DEFAULT_CITY, NameSpace } from '../../utils/const';
import { fetchCurrentOfferAction, fetchFavoriteOffers, fetchNearbyOffersAction, fetchOffersAction } from '../api-actions';

const initialState: OffersProcess = {
  city: DEFAULT_CITY,
  offers: [],
  currentOffer: currentOffer,
  isOffersDataLoading: false,
  nearbyOffers: [],
  favoriteOffers: [],
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const {changeCity} = offersProcess.actions;
