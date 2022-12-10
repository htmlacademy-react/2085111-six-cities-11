import {createAction} from '@reduxjs/toolkit';
import { Comment } from '../types/comment';
import {Hotel} from '../types/hotel';
import {AppRoute, AuthorizationStatus} from '../utils/const';

export const changeCity = createAction('sixCities/changeCity', (city: string) => ({payload: city}));

export const loadOffers = createAction<Hotel[]>('data/offers');

export const loadOffer = createAction<Hotel>('data/offer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('sixCities/redirectToRoute');

export const setEmail = createAction<string>('user/setEmail');

export const loadComments = createAction<Comment[]>('data/comments');

export const loadNearbyOffers = createAction<Hotel[]>('data/nearbyOffers');

export const addNewComment = createAction<Comment>('data/addNewComment');

