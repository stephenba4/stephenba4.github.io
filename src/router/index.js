import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistDetails from '@/views/ArtistDetails.vue';
import ArtistDetailsParent from '@/views/ArtistDetailsParent.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/artistDetails/:id',
    component: ArtistDetailsParent,
    children: [
      {
        path: '',
        name: 'Artist Details',
        component: ArtistDetails,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
