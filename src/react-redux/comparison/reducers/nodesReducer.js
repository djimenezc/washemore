import * as actionTypes  from '../actionTypes'

const defaults = {
  nodes: []
};

export default (state = defaults, action) => {

  switch (action.type) {

  case actionTypes.UPDATE_NODES : {
    state = {...state, name: action.payload.name};
    break;
  }
  }

  return state;
};
