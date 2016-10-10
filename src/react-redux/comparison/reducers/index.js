import {combineReducers} from 'redux'
import nodes from './nodesReducer'
import settings from './settingsReducer'

const reducers = combineReducers({
  nodes,
  settings
});

export default reducers;
