import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/App.js';
import { Provider } from 'react-redux';
import store from './modules/store';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

