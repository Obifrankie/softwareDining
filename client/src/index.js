import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';


// const az_identity = require('@azure/identity');
// const az_ky = require('@azure/keyvault-secrets');

// const credentials = new az_identity.DefaultAzureCredential();
// const client = new az_ky.SecretClient('https://softwarediningkey.vault.azure.net/', credentials); 

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
