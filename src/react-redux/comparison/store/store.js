import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import {applyMiddleware, createStore} from 'redux'

const routerMiddlewareWrapped = routerMiddleware(browserHistory);

const middleware = applyMiddleware(promise(), thunk, logger(), routerMiddlewareWrapped);
const store = createStore(reducers, middleware);

console.log(store.getState());

export default store;
