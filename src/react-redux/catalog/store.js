import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

import {applyMiddleware, createStore} from 'redux'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducers, middleware);
