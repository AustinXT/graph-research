import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/G6',
    name: 'G6',
    component: () => import('../views/G6.vue'),
  },
  {
    path: '/D3',
    name: 'D3',
    component: () => import('../views/D3.vue'),
  },
  {
    path: '/Colajs',
    name: 'Colajs',
    component: () => import('../views/Colajs.vue'),
  },
  {
    path: '/Cytoscapejs',
    name: 'Cytoscapejs',
    component: () => import('../views/Cytoscapejs.vue'),
  },
  {
    path: '/Echarts',
    name: 'Echarts',
    component: () => import('../views/Echarts.vue'),
  },
  {
    path: '/Sigmajs',
    name: 'Sigmajs',
    component: () => import('../views/Sigmajs.vue'),
  },
  {
    path: '/Visjs',
    name: 'Visjs',
    component: () => import('../views/Visjs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
