import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import {Catalog, reducers} from './widgets/catalog';

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

const logger = () => (next) => (action) => {
  console.log('action fired', action.type, action.payload);
  next(action);
};

const middleware = applyMiddleware(logger);

const initialState = {};

const store = createStore(reducers, initialState, middleware);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'CHANGE_NAME', payload: 'david'});
store.dispatch({type: 'CHANGE_NAME', payload: 'angel'});

console.log('Starting App');

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      {/*<App name={'david'}/>*/}
      <Catalog/>
    </Provider>
  </div>,
  document.getElementById('app'));
