import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@views/Articles.vue';
import Dashboard from '@views/Dashboard.vue';
import Users from '@views/Users.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
