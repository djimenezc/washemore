import {
  CHANGE_NAME,
  CHANGE_LEVELS_NUMBER,
  CHANGE_NODES_NUMBER,
  UPDATE_NODE_LIST
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

function parseNumberSetting(number) {
  let numberParsed = number.currentTarget ? number.currentTarget.value : number;

  return parseInt(numberParsed) || 0;
}

function changeNumber(number, type) {

  return {
    type: type,
    payload: {
      number: parseNumberSetting(number)
    }
  }
}

export function changeNodesNumber(nNodes) {
  return changeNumber(nNodes, CHANGE_NODES_NUMBER);
}

export function changeLevelsNumber(nLevels) {
  return changeNumber(nLevels, CHANGE_LEVELS_NUMBER);
}

export function updateNodeList(nNodes, nLevels) {
  return {
    type: UPDATE_NODE_LIST,
    payload: {
      nNodes: parseNumberSetting(nNodes),
      nLevels: parseNumberSetting(nLevels)
    }
  }
}
