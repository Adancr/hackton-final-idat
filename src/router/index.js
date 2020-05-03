import Vue from 'vue';
import VueRouter from 'vue-router';


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
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
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
