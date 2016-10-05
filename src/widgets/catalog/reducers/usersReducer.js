import * as actionTypes from '../actionTypes';

const defaults = {};

export default (state = defaults, action) => {

  switch (action.type) {

  case actionTypes.FETCH_USERS_PENDING : {
    state = {...state, name: action.payload, fetching: true};
    break;
  }
  case actionTypes.FETCH_USERS_ERROR : {
    state = {...state, name: action.payload, fetching: false};
    break;
  }
  case actionTypes.FETCH_USERS_RECEIVE : {
    state = {...state, name: action.payload, fetching: false};
    break;
  }
  }

  return state;
};
