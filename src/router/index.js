import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Home from '../views/front/Home.vue';
import Insights from '../views/back/Insights.vue';
import store from '../store';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/insights',
    name: 'Insights',
    component: Insights,
    meta: { requiresAuth: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router