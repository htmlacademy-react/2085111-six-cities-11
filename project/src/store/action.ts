import {createAction} from '@reduxjs/toolkit';
import {Hotel} from '../types/hotel';
import {AppRoute, AuthorizationStatus} from '../utils/const';

export const changeCity = createAction('sixCities/changeCity', (city: string) => ({payload: city}));

export const loadOffers = createAction<Hotel[]>('data/offers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('sixCities/redirectToRoute');

export const setEmail = createAction<string>('user/setEmail');
