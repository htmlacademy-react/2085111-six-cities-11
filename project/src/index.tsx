import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { hotels } from './mocks/hotels';
import { store } from './store';
import { Hotel } from './types/hotel';

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
    <Provider store={store}>
      <App
        settings={settings}
      />
    </Provider>
  </React.StrictMode>,
);
