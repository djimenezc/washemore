import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes/Routes'

console.log('Starting App');

const nNodes = 30;
const nLevels = 2;
const name = 'david';

// Render the main component into the dom
ReactDOM.render(
  <div>
    <p>I am {name} at the index.js.</p>

    <Routes nNodes={nNodes} nLevels={nLevels} name={name}/>

  </div>,
  document.getElementById('app')
)
;
