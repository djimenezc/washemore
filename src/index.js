import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import App from './widgets/main/components/Main';
//noinspection JSUnresolvedVariable,ES6UnusedImports
import {Catalog, store} from './widgets/catalog'

console.log('Starting App');

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Catalog>
        <App name={'david'}/>
      </Catalog>
    </Provider>
  </div>,
  document.getElementById('app'));
