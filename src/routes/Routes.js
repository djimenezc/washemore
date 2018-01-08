import React from 'react'
import {Provider} from 'react-redux'
//TOOLS
// import DevTools from '../react-redux/comparison/containers/devTools'
//noinspection ES6UnusedImports
import {
  store,
  ComparisonRedux,
  reduxActions,
  RedirectExample,
  Chat
} from '../react-redux/comparison'
//noinspection ES6UnusedImports
import {
  MyComponentContainer,
  Animation,
  Home,
  ToggleAnimatedButton,
  SortablePane
} from '../react/comparison'
import {ComparisonFlux} from '../react-flux/comparison'
//ROUTER
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Links from './Links'
import NoMatch from './NoMatch'


class Routes extends React.Component {

  render() {

    const {name} = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" name="Root" component={Links}>
              <IndexRoute component={Home}/>
              <Route path="react" name="React">
                <IndexRoute component={(routeInfo) => (
                  <div>
                    <MyComponentContainer
                      name={name}
                      nNodes={routeInfo.location.query.nNodes}
                      nLevels={routeInfo.location.query.nLevels}
                    />
                  </div>
                )}/>
                <Route path="animation" name="Animation" component={Animation}/>
                <Route path="toggleButton" name="Toggle Button"
                       component={ToggleAnimatedButton}/>
                <Route path="sortablePane" name="Menu Motion"
                       component={SortablePane}/>
              </Route>
              <Route path="redux" name="Redux">
                <IndexRoute component={(routeInfo) => {

                  const {nNodes, nLevels} = routeInfo.location.query;
                  store.dispatch(reduxActions.changeName(name));
                  store.dispatch(reduxActions.updateNodeList(nNodes, nLevels));

                  return <div>
                    <ComparisonRedux/>
                  </div>
                }}/>
                <Route path='chat' name='chat'
                       component={Chat}/>
                <Route path='redirectExample' name='redirectExample'
                       component={RedirectExample}/>
                <Redirect from='redirect' to='/react/sortablePane'/>
              </Route>
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
          {/*<DevTools />*/}
        </div>
      </Provider>

    );
  }
}

Routes.defaultProps = {};

export default Routes;
