// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// BASE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';

// STORE
import { StoreProvider } from 'store';
import createStore from 'store/createStore';
import initialState from 'store/store.schema';
import reducer from 'store/store.reducer';
const store = createStore({ reducer, initialState });

// ============================================== //

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  const App = require('./containers/App').default;
  ReactDOM.render(
    <StoreProvider store={store}>
      <Router>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Router>
    </StoreProvider>,
    MOUNT_NODE,
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', render);
}

serviceWorker.unregister();
