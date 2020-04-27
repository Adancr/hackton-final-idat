import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../views/register/Register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: () => import('../views/landing/Landing.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/register/Register.vue'),
  },
  {
    path: '/',
    component: () => import('../components/Layout.vue'),
    
    children: [
      {
        path: '/',
        name: 'init',
        component: () => import('../views/init/Init.vue'),
      },
      {
        path: '/messages',
        name: 'Messages',
        component: () => import('../views/messages/Messages.vue'),
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('../views/account/Account.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
