import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';
import { setConnexion } from 'src/store/actions';


const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));

store.dispatch(setConnexion());
