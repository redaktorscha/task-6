import Vue from 'vue';
import Vuex from 'vuex';
import loginform from '@/components/loginform.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
  },
  getters: {
    updateEmailValue: (state) => {
      return state.email;
    },
  },
  mutations: {

  },
  actions: {

  },
});
