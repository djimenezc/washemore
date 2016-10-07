import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import {store, ComparisonRedux} from './react-redux/comparison'
import {MyComponentContainer} from './react/comparison'
import createNodeTree from './createNodeTree'

import {Router, Route, hashHistory} from 'react-router'
import Links from './links'

console.log('Starting App');

const nNodes = 30;
const nLevels = 2;

console.log(`We have ${nNodes} children`);

const name = 'david';

// Render the main component into the dom
ReactDOM.render(
  <div>
    <p>I am {name} at the index.js.
    </p>

    <Router history={hashHistory}>
      <Route path="/" component={Links}/>
      <Route path="/react" component={() => (
        <MyComponentContainer
          name={name}
          createNodeTree={createNodeTree}
          nNodes={nNodes}
          nLevels={nLevels}
        />
      )}/>
      <Route path="/redux" component={() => (
        <Provider store={store}>
          <ComparisonRedux name={name}/>
        </Provider>
      )}/>

    </Router>

  </div>,
  document.getElementById('app')
)
;
