import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { Hotel } from './types/hotel';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
