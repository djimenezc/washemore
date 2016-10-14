export const getViewState = state => Object.assign({}, state, {
  // return a list of users active during this session
  recentlyActiveUsers: [...new Set(state.chatLog.map(chat => chat.user))]
});
