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

function changeNumber(number, type) {

  let numberParsed = number.currentTarget ? number.currentTarget.value : number;
  numberParsed = parseInt(numberParsed) || 0;

  return {
    type: type,
    payload: {
      number: numberParsed
    }
  }
}

export function changeNodesNumber(nNodes) {

  return changeNumber(nNodes, CHANGE_NODES_NUMBER);
}

export function changeLevelsNumber(nLevels) {

  return changeNumber(nLevels, CHANGE_LEVELS_NUMBER);
}
