import * as actionTypes  from '../actionTypes'

const defaults = {
  name: '',
  nNodes: 0,
  nLevels: 0
};

export default (state = defaults, action) => {

  switch (action.type) {

  case actionTypes.CHANGE_NAME : {
    state = {...state, name: action.payload.name};
    break;
  }

  case actionTypes.CHANGE_NODES_NUMBER : {
    state = {...state, nNodes: action.payload.number};
    break;
  }

  case actionTypes.CHANGE_LEVELS_NUMBER : {
    state = {...state, nLevels: action.payload.number};
    break;
  }
  }

  return state;
};
