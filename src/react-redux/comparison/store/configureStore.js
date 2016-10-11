import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';
// import DevTools from '../containers/devTools'
import {applyMiddleware, createStore, compose} from 'redux'

const middleware = applyMiddleware(promise(), thunk, logger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  // Middleware you want to use in development:
  middleware
  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument()
);

function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);

  // console.log(store.getState());

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel
       6+ */)
    );
  }

  return store;
}

export default configureStore({});
