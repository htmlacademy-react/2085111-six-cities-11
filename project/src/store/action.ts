import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('sixCities/changeCity', (city: string) => ({payload: city}));
export const getOffersList = createAction('sixCities/getOffersList');
