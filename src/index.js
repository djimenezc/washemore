import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import {Catalog, reducers} from './widgets/catalog';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducers);

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
