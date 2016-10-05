const defaults = {};

export default (state = defaults, action) => {

  switch (action.type) {

  case 'FETCH_USER_START' : {
    state = {...state, name: action.payload};
    break;
  }
  case 'FETCH_USER_ERROR' : {
    state = {...state, name: action.payload};
    break;
  }
  case 'RECEIVE_USER ' : {
    state = {...state, name: action.payload};
    break;
  }
  }

  return state;
};
