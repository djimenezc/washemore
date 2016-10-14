import {combineReducers} from 'redux'
import nodes from './NodesReducer'
import settings from './SettingsReducer'
import chat from './ChatReducer'
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  nodes,
  settings,
  chat,
  routing: routerReducer
});

export default reducers;
