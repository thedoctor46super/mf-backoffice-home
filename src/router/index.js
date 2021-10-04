//import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
const routes = [
  {
    path: '/mf-backoffice-root/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mf-backoffice-root/home',
    name: 'Default',
    component: Home,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
export default router;
