import {
  CHANGE_NAME,
  CHANGE_LEVELS_NUMBER,
  CHANGE_NODES_NUMBER,
  UPDATE_NODE_LIST,
  BUILD_NODE_LIST
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

function parseNumberSetting(number = 0) {
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

  return (dispatch, getState) => {
    dispatch(changeNumber(nNodes, CHANGE_NODES_NUMBER));
    const nNodesState = getState().settings.nNodes;
    const nLevelsState = getState().settings.nLevels;
    dispatch(buildNodeListAction(BUILD_NODE_LIST, nNodesState, nLevelsState))
  }
}

export function changeLevelsNumber(nLevels) {

  return (dispatch, getState) => {
    dispatch(changeNumber(nLevels, CHANGE_LEVELS_NUMBER));
    const nNodesState = getState().settings.nNodes;
    const nLevelsState = getState().settings.nLevels;
    dispatch(buildNodeListAction(BUILD_NODE_LIST, nNodesState, nLevelsState))
  }
}

function buildNodeListAction(actionName, nNodes, nLevels) {

  return {
    type: actionName,
    payload: {
      nNodes: parseNumberSetting(nNodes),
      nLevels: parseNumberSetting(nLevels)
    }
  }
}

export function updateNodeList(nNodes, nLevels) {
  return buildNodeListAction(UPDATE_NODE_LIST, nNodes, nLevels)
}
