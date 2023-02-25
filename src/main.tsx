import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { router } from './App';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store, persistor } from './reducers/index';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
