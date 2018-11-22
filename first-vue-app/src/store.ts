import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: '',
  },
  mutations: {
    updateLoginValue(state, newlogin) {
      state.login = newlogin;
  },
    },
  actions: {

  },
});
