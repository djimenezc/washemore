import * as t from '../actionTypes';

export default {
  // fetchUser: () => ({
  //   type: t.FETCH_USERS_RECEIVE,
  //   payload: {
  //     name: 'david',
  //     age: 35
  //   }
  // }),

  fetchUser1: () => ({
    type: t.FETCH_USERS,
    payload: fetch('http://rest.learncode.academy/api/wstern/users')
      .then(response => response.json())
  })
};
