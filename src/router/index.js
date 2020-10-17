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
    path: '/productSpace',
    name: 'ProductSpacePage',
    component: () => import('../views/productSpace/Page.vue'),
    children: [
      {
        path: 'G6',
        name: 'G6',
        component: () => import('../views/productSpace/G6.vue'),
      },
      {
        path: 'D3',
        name: 'D3',
        component: () => import('../views/productSpace/D3.vue'),
      },
      {
        path: 'Colajs',
        name: 'Colajs',
        component: () => import('../views/productSpace/Colajs.vue'),
      },
      {
        path: 'Cytoscapejs',
        name: 'Cytoscapejs',
        component: () => import('../views/productSpace/Cytoscapejs.vue'),
      },
      {
        path: 'Echarts',
        name: 'Echarts',
        component: () => import('../views/productSpace/Echarts.vue'),
      },
      {
        path: 'Sigmajs',
        name: 'Sigmajs',
        component: () => import('../views/productSpace/Sigmajs.vue'),
      },
      {
        path: 'Visjs',
        name: 'Visjs',
        component: () => import('../views/productSpace/Visjs.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
