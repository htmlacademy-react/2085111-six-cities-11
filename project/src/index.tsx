import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {hotels} from './mocs/hotels';
import {Hotel} from './types/hotel';

const settings = {
  OffersCount: 312,
  Hotels: hotels,
};

export type SettingsType = {
  OffersCount: number;
  Hotels: Hotel[];
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      settings = {settings}
    />
  </React.StrictMode>,
);
