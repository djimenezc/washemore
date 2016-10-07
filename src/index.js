import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import {store, ComparisonRedux} from './react-redux/comparison'
import {MyComponentContainer} from './react/comparison'
import createNodeTree from './createNodeTree'

console.log('Starting App');

const nNodes = 30;
const nLevels = 2;

console.log(`We have ${nNodes} children`);

const name = 'david';

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      <ComparisonRedux name={name}/>
    </Provider>

    <p>I am {name} at the index.js</p>

    <MyComponentContainer name={name}
                          createNodeTree={createNodeTree}
                          nNodes={nNodes}
                          nLevels={nLevels}
    />
  </div>,
  document.getElementById('app'));
