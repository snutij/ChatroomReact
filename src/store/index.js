import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';
import socketMiddelware from 'src/store/socket'; // notre middleware custom

// Extension Redux Dev Tools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares custom — on n'en a qu'un seul
const socketMiddleware = applyMiddleware(socketMiddelware);

// Enhancers : les extensions/outils + les middlewares custom
const enhancers = compose(socketMiddleware, ...devTools);

// Store, configuré avec le reducer et les "enhancers"
const store = createStore(reducer, enhancers);

export default store;