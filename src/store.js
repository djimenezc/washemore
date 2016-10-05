import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//noinspection ES6UnusedImports
import {reducers} from './widgets/catalog';

import {applyMiddleware, createStore} from 'redux'
//noinspection JSUnresolvedVariable

const middleware = applyMiddleware(promise(), thunk, logger());

const initialState = {
  componentList: [],
  reducer: {},
  user: {}
};

//noinspection JSCheckFunctionSignatures
export default createStore(reducers, initialState, middleware);
