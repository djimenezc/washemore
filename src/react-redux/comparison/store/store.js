import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';

import {applyMiddleware, createStore} from 'redux'

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducers, middleware);

console.log(store.getState());

export default store;
