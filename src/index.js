import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
//noinspection JSUnresolvedVariable
import {Provider} from 'react-redux'
import {ComparisonReact, ComparisonRedux, store} from './react-redux/comparison'
import _ from 'lodash'

console.log('Starting App');

const nNodes = 50;
const nLevels = 3;

const createNodeTree = (level, nNodes) => {

  // const nodes = [];
  // debugger;
  if (level > 0) {
    return _.times(nNodes, function (index) {
      // debugger;

      return {
        name: _.random(1, nNodes),
        id: `${level}-${index}`,
        nodes: createNodeTree(level - 1, nNodes)
      };
    })
      .filter((item) => item);
  }
};

const nodes = createNodeTree(nLevels, nNodes);
// debugger;

console.log(`We have ${nNodes} children`);

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Provider store={store}>
      <ComparisonRedux name={'david'}/>
    </Provider>

    <ComparisonReact name={'david'} nodes={nodes}/>
  </div>,
  document.getElementById('app'));
