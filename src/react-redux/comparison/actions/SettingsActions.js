import {
  CHANGE_NAME,
  CHANGE_LEVELS_NUMBER,
  CHANGE_NODES_NUMBER
} from '../actionTypes';

export function changeName(name) {

  const nameParsed = name.currentTarget ? name.currentTarget.value : name;
  return {
    type: CHANGE_NAME,
    payload: {
      name: nameParsed
    }
  }
}

export function changeNodesNumber(nNodes) {

  let nNodesParsed = nNodes.currentTarget ? nNodes.currentTarget.value : nNodes;
  nNodesParsed = parseInt(nNodesParsed);

  return {
    type: CHANGE_NODES_NUMBER,
    payload: {
      number: nNodesParsed
    }
  }
}

export function changeLevelsNumber(nLevels) {

  let nLevelsParsed = nLevels.currentTarget ? nLevels.currentTarget.value : nLevels;
  nLevelsParsed = parseInt(nLevelsParsed);

  return {
    type: CHANGE_LEVELS_NUMBER,
    payload: {
      number: nLevelsParsed
    }
  }
}
