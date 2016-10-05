import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//noinspection ES6UnusedImports
import {reducers} from './widgets/catalog';

import {applyMiddleware, createStore} from 'redux'
//noinspection JSUnresolvedVariable

const middleware = applyMiddleware(promise(), thunk, logger());

//noinspection JSCheckFunctionSignatures
export default createStore(reducers, middleware);
