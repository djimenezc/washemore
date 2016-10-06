import * as actionTypes from '../actionTypes';

export default (state = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: null
}, action) => {

  switch (action.type) {

  case actionTypes.FETCH_USERS_PENDING : {
    state = {...state, fetching: true};
    break;
  }
  case actionTypes.FETCH_USERS_ERROR : {
    state = {...state, error: action.payload, fetching: false};
    break;
  }
  case actionTypes.FETCH_USERS_RECEIVE : {
    state = {
      ...state,
      fetching: false,
      fetched: true,
      user: action.payload[0]
    };
    break;
  }
  case 'SET_USER_NAME': {
    state = {
      ...state,
      user: {...state.user, name: action.payload}
    };
    break;
  }
  case 'SET_USER_AGE': {
    state = {
      ...state,
      user: {...state.user, age: action.payload}
    };
    break;
  }
  }

  return state;
};
