import * as actionTypes  from '../actionTypes'
import createNodeTree from '../../../createNodeTree'

const defaults = {
  nodes: []
};

export default (state = defaults, action) => {

  switch (action.type) {

  case actionTypes.UPDATE_NODE_LIST : {
    const {nNodes, nLevels} = action.payload;
    const nodes = createNodeTree(nLevels, nNodes);

    state = {
      ...state,
      nodes: nodes
    };
    break;
  }
  }

  return state;
};
