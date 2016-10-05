import * as t from '../actionTypes';

export default {
  fetchUser: () => ({
    type: t.FETCH_USERS_RECEIVE,
    payload: {
      name: 'david',
      age: 35
    }
  })
};
