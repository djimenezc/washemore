import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import {ComparisonReact, ComparisonRedux, store} from './react-redux/comparison'
import createNodeTree from './createNodeTree'

console.log('Starting App');

const nNodes = 30;
const nLevels = 2;

console.log(`We have ${nNodes} children`);

const name = 'david';

const nodes = createNodeTree(nLevels, nNodes);

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      <ComparisonRedux name={name}/>
    </Provider>

    <p>I am {name} at the index.js</p>
    <ComparisonReact name={name}
                     nodes={nodes}
                     nNodes={nNodes}
                     nLevels={nLevels}
    />
  </div>,
  document.getElementById('app'));
