import React from 'react'
import {Provider} from 'react-redux'

//noinspection ES6UnusedImports
import {store, ComparisonRedux} from '../react-redux/comparison'
import {MyComponentContainer} from '../react/comparison'
import {ComparisonFlux} from '../react-flux/comparison'
import createNodeTree from '../createNodeTree'

import {Router, Route, hashHistory} from 'react-router'
import Links from './Links'
import NoMatch from './NoMatch'

class Routes extends React.Component {

  render() {

    const {name} = this.props;

    return (
      <Router history={hashHistory}>
        <Route path="/" name="Root" component={Links}>
          <Route path="react" name="React" component={(routeInfo) => (
            <div>
              <MyComponentContainer
                name={name}
                createNodeTree={createNodeTree}
                nNodes={routeInfo.location.query.nNodes}
                nLevels={routeInfo.location.query.nLevels}
              />
            </div>
          )}/>
          <Route path="redux" name="Redux" component={(routeInfo) => {
            return <Provider store={store}>
              <div>
                <ComparisonRedux name={name}
                                 nNodes={routeInfo.location.query.nNodes}
                                 nLevels={routeInfo.location.query.nLevels}
                />
              </div>
            </Provider>
          }}/>
          <Route path="flux" name="Flux" component={(routeInfo) => {
            return <Provider store={store}>
              <div>
                <ComparisonFlux name={name}
                                nNodes={routeInfo.location.query.nNodes}
                                nLevels={routeInfo.location.query.nLevels}
                />
              </div>
            </Provider>
          }}/>
          <Route path="*" name="Route not matched" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

Routes.defaultProps = {};

export default Routes;
