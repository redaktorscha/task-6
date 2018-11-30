import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import SignIn from './views/SignIn/SignIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/confirmauth',
      name: 'confirmauth',
      component: () => import('./views/ConfirmAuth/ConfirmAuth.vue'),

    },
  ],
});
