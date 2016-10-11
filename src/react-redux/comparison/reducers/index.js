import {combineReducers} from 'redux'
import nodes from './nodesReducer'
import settings from './settingsReducer'
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  nodes,
  settings,
  routing: routerReducer
});

export default reducers;
