import { SUCCESS_REGISTER, SET_LOGIN, SET_USER } from './mutations-type';

const MUTATIONS = {
  [SUCCESS_REGISTER](state, payload) {
    state.successRegister = payload;
  },
  [SET_LOGIN](state, payload) {
    state.isLogin = payload;
  },
  [SET_USER](state, payload) {
    state.user = payload;
  },
};

export default MUTATIONS;