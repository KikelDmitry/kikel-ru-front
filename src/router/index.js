import ContentView from '@/views/ContentView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import KikelHome from '@/components/KikelHome.vue';
import GalleryView from '@/views/GalleryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: KikelHome,
      meta: {
        title: 'Художник Владимир Кикель',
        description: 'Description of Vladimir Kikel homepage',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: ContentView,
      meta: {
        title: 'Об авторе',
        description: 'Description of Vladimir Kikel about',
      },
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: GalleryView,
      meta: {
        title: 'Галерея',
        description: 'Description of gallery',
      },
    },
  ],
});

export default router;
