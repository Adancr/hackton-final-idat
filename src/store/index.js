import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '@/views/auth/store';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    authStore,
  }
})
