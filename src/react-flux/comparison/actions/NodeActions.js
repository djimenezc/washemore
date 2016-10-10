import dispatcher from '../dispatcher/dispatcher';

export function changeName(name) {

  dispatcher.dispatch({
    type: 'CHANGE_NAME',
    name
  });
}

export function setNodesNumber(nNodes) {

  dispatcher.dispatch({
    type: 'CHANGE_NODES_NUMBER',
    nNodes
  });
}

export function setLevelsNumber(nLevels) {

  dispatcher.dispatch({
    type: 'CHANGE_LEVELS_NUMBER',
    nLevels
  });
}
