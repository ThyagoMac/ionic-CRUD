import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Lists from '../views/Lists.vue';
import All from '../views/All.vue';
import Work from '../views/Work.vue';
import Music from '../views/Music.vue';
import Shopping from '../views/Shopping.vue';
import Sport from '../views/Sport.vue';
import Study from '../views/Study.vue';
import Travel from '../views/Travel.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Lists'
  },
  {
    path: '/Lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/All',
    name: 'All',
    component: All
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/Music',
    name: 'Music',
    component: Music
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/Sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/Study',
    name: 'Study',
    component: Study
  },
  {
    path: '/Travel',
    name: 'Travel',
    component: Travel
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
