import * as actionTypes  from '../actionTypes'

const defaults = {
  name: '',
  nNodes: 0,
  nLevels: 0
};

export default (state = defaults, action) => {

  switch (action.type) {

  case actionTypes.CHANGE_LOCATION : {
    console.log(actionTypes.CHANGE_LOCATION, action.payload.pathname, action.payload.query);
    if (action.payload.query.nLevel) {
      state = {...state, nLevels: parseInt(action.payload.query.nLevel)};
    }
    break;
  }

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

  case actionTypes.UPDATE_NODE_LIST : {
    state = {
      ...state,
      nLevels: action.payload.nLevels,
      nNodes: action.payload.nNodes
    };
    break;
  }
  }


  return state;
};
