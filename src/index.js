import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
//noinspection JSUnresolvedVariable,ES6UnusedImports
import {Catalog, reducers, actionTypes} from './widgets/catalog';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import {applyMiddleware, createStore} from 'redux'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'

const middleware = applyMiddleware(promise(), thunk, logger());

const initialState = {
  componentList: [],
  reducer: {},
  userReducer: {}
};

//noinspection JSCheckFunctionSignatures
const store = createStore(reducers, initialState, middleware);


store.dispatch({
  type: actionTypes.FETCH_USERS,
  payload: fetch('http://rest.learncode.academy/api/wstern/users')
});

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
