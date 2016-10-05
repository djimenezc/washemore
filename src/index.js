import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
//noinspection JSUnresolvedVariable,ES6UnusedImports
import {Catalog, reducers, actionTypes} from './widgets/catalog';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {applyMiddleware, createStore} from 'redux'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'

const middleware = applyMiddleware(thunk, logger());

const initialState = {
  componentList: [],
  reducer: {},
  userReducer: {}
};

//noinspection JSCheckFunctionSignatures
const store = createStore(reducers, initialState, middleware);


store.dispatch((dispatch) => {
  dispatch({type: actionTypes.FETCH_USERS_PENDING});
  //do something async
  fetch('https://rest.learncode.academy/api/wstern/users')
    .then((response) => dispatch({
      type: actionTypes.FETCH_USERS_RECEIVE, payload: response.data
    }))
    .catch((err) => {
      dispatch(({
        type: actionTypes.FETCH_USERS_ERROR, payload: err
      }))
    });
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
