import {combineReducers} from 'redux'
import reducer from './reducer'
import componentList from './componentListReducer'
import user from './users'

const reducers = combineReducers({
  componentList,
  reducer,
  user
});

export default reducers;
