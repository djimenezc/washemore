import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import {Comparison, store} from './react-redux/comparison'

console.log('Starting App');

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Comparison name={'david'}/>
    </Provider>
  </div>,
  document.getElementById('app'));
