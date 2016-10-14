import {
  ADD_CHAT,
  CHANGE_STATUS,
  CHANGE_USERNAME
} from '../actionTypes';
import cuid from 'cuid';

export const addChat = ({
  // cuid is safer than random uuids/v4 GUIDs
  // see usecuid.org
  id = cuid(),
  msg = '',
  user = 'Anonymous',
  timeStamp = Date.now()
} = {}) => ({
  type: ADD_CHAT,
  payload: {id, msg, user, timeStamp}
});

export const changeStatus = (statusMessage = 'Online') => ({
  type: CHANGE_STATUS,
  payload: {statusMessage}
});

export const changeUserName = (userName = 'Anonymous') => ({
  type: CHANGE_USERNAME,
  payload: {userName}
});
