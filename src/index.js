import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import {Catalog} from './widgets/catalog';

console.log('Starting App');

// Render the main component into the dom
ReactDOM.render(<div>
  {/*<App name={'david'}/>*/}
  <Catalog/>
</div>, document.getElementById('app'));
