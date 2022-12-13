import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersProcess } from '../../types/state';
import { currentOffer, DEFAULT_CITY, NameSpace } from '../../utils/const';
import { fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOffersAction, setFavoriteStatusAction } from '../api-actions';

const initialState: OffersProcess = {
  city: DEFAULT_CITY,
  offers: [],
  currentOffer: currentOffer,
  isOffersDataLoading: false,
  nearbyOffers: [],
  favoriteOffers: [],
  favoritesCounter: 0,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeFavoritesCounter: (state, action: PayloadAction<boolean>) => {
      const count = action.payload ? 1 : -1;
      state.favoritesCounter += count;
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
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoritesCounter = action.payload.length;
      })
      .addCase(setFavoriteStatusAction.fulfilled, (state, action) => {
        state.offers.forEach((offer) => {
          if (offer.id === action.payload) {
            offer.isFavorite = !offer.isFavorite;
          }
        });
      });
  }
});

export const {changeCity, changeFavoritesCounter} = offersProcess.actions;
