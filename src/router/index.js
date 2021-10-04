import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Default',
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
