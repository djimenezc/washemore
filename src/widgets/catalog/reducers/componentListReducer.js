const defaults = {};

export default (state = defaults, action) => {

  switch (action.type) {

  case 'CHANGE_NAME' : {
    state = {...state, name: action.payload};
    break;
  }
  }

  return state;
};
