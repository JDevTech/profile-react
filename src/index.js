import React from 'react';
import ReactDOM from 'react-dom';
import state_app from './store/reducers'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(state_app, compose(middlewareEnhancer));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
