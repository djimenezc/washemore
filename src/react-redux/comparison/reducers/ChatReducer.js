import {
  ADD_CHAT,
  CHANGE_STATUS,
  CHANGE_USERNAME
} from '../actionTypes';

const defaultState = {
  statusMessage: 'disconnected',
  userName: 'Anonymous',
  chatLog: []
};

export default (state = defaultState, action = {}) => {

  const {type, payload} = action;

  switch (type) {
  case ADD_CHAT:
    return Object.assign({}, state, {
      chatLog: state.chatLog.concat(payload)
    });

    // Catch all simple changes
  case CHANGE_STATUS:
  case CHANGE_USERNAME:
    return Object.assign({}, state, payload);

  default:
    return state;
  }
};
