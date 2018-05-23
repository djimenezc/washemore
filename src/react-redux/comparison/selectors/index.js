import {createSelector} from 'reselect'

// export const getViewState = state => Object.assign({}, state, {
//   // return a list of users active during this session
//   recentlyActiveUsers: [...new Set(state.chatLog.map(chat => chat.user))]
// });

const getChatLogs = (state) => state.chat.chatLog;

export const recentlyActiveUsers = createSelector(
  [getChatLogs],
  (chats) => [...new Set(chats.map(chat => chat.user))]
);
