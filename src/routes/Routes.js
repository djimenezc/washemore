import React from 'react'
import {Provider} from 'react-redux'

//noinspection ES6UnusedImports
import {store, ComparisonRedux, reduxActions} from '../react-redux/comparison'
import {MyComponentContainer} from '../react/comparison'
import {ComparisonFlux} from '../react-flux/comparison'

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
                nNodes={routeInfo.location.query.nNodes}
                nLevels={routeInfo.location.query.nLevels}
              />
            </div>
          )}/>
          <Route path="redux" name="Redux" component={(routeInfo) => {

            const {nNodes, nLevels} = routeInfo.location.query;
            store.dispatch(reduxActions.changeName(name));
            //store.dispatch(reduxActions.changeNodesNumber(routeInfo.location.query.nNodes));
            //store.dispatch(reduxActions.changeLevelsNumber(routeInfo.location.query.nLevels));
            store.dispatch(reduxActions.updateNodeList(nNodes, nLevels));

            return <Provider store={store}>
              <div>
                <ComparisonRedux/>
              </div>
            </Provider>
          }}/>
          <Route path="flux" name="Flux" component={(routeInfo) => {
            return <div>
              <ComparisonFlux name={name}
                              nNodes={routeInfo.location.query.nNodes}
                              nLevels={routeInfo.location.query.nLevels}
              />
            </div>
          }}/>
          <Route path="*" name="Route not matched" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

Routes.defaultProps = {};

export default Routes;
