import { createRouter, createWebHistory } from 'vue-router';
import Articles from '@views/Articles.vue';

const routes = [
  {
    path: '/',
    name: 'Articles',
    component: Articles,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
