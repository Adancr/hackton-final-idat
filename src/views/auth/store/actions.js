import { SUCCESS_REGISTER, SET_LOGIN, SET_USER } from './mutations-type';

const ACTIONS = {
  register({ commit }, payload) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(() => commit(SUCCESS_REGISTER, true))
      .catch(() => commit(SUCCESS_REGISTER, false));
  },
  login({ commit }, payload) {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        /* eslint-disable */
        const user = users.find( 
          (user) => user.username === payload.username && user.password === payload.password
        );
        if (user) {
          commit(SET_USER, user);
          commit(SET_LOGIN, true);
        } else {
          commit(SET_LOGIN, false);
        }
      })
      .catch(() => commit(SET_LOGIN, false));
  },
};

export default ACTIONS;