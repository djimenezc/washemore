import {combineReducers} from 'redux'
import reducer from './reducer'
import componentList from './componentListReducer'
// import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  componentList,
  reducer
  // visibilityFilter
});

export default reducers;
