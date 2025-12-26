export const galleryRoutes = {
  path: '/pictures',
  name: 'Живопись',
  component: () => import('@/views/GalleryView.vue'),
  meta: {
    title: 'Галерея',
    description: 'Description of gallery',
  },
  children: [
    {
      path: 'seascape',
      name: 'Морской пейзаж',
      meta: {
        title: 'Морской пейзаж',
        description: 'Морской пейзаж descr',
      },
    },
    {
      path: 'still_life',
      name: 'Натюрморт',
      meta: {
        title: 'Натюрморт',
        description: 'Натюрморт descr',
      },
    },
    {
      path: 'portrait',
      name: 'Портрет',
      meta: {
        title: 'Портрет',
        description: 'Портрет descr',
      },
    },
    {
      path: 'paysage',
      name: 'Пейзаж',
      meta: {
        title: 'Пейзаж',
        description: 'Портрет descr',
      },
    },
    {
      path: 'italia',
      name: 'Итальянский пейзаж',
      meta: {
        title: 'Итальянский пейзаж',
        description: 'Итальянский пейзаж descr',
      },
    },
    {
      path: 'subject',
      name: 'Сюжет',
      meta: {
        title: 'Сюжет',
        description: 'Сюжет descr',
      },
    },
  ],
};
