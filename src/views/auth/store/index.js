import state from './state';
import actions from './actions';
import mutations from './mutations';

const authStore = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default authStore;
