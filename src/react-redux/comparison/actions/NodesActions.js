import {UPDATE_NODES} from '../actionTypes';

export function supdateNodes(nodes) {
  return {
    type: UPDATE_NODES,
    payload: {
      nodes: nodes
    }
  }
}
