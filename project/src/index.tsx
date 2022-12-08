import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {hotels} from './mocks/hotels';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {Hotel} from './types/hotel';

const settings = {
  OffersCount: 312,
  Hotels: hotels,
};

export type SettingsType = {
  OffersCount: number;
  Hotels: Hotel[];
};

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        settings={settings}
      />
    </Provider>
  </React.StrictMode>,
);
