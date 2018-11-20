import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SignIn/SignIn.vue'),
    },
    {
      path: '/confirmauth',
      name: 'confirmauth',
      component: () => import('./views/ConfirmAuth/ConfirmAuth.vue'),

    },
  ],
});
