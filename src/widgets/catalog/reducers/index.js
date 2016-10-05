import {combineReducers} from 'redux'
import reducer from './reducer'
import componentList from './componentListReducer'
import userReducer from './usersReducer'

const reducers = combineReducers({
  componentList,
  reducer,
  userReducer
});

export default reducers;
