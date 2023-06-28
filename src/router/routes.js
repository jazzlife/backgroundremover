const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Daily.vue')},
      {path: '/Daily', component: () => import('pages/Daily.vue')},
      {path: '/Weekly', component: () => import('pages/Weekly.vue')},
      {path: '/Monthly', component: () => import('pages/Monthly.vue')},
      {path: '/Yearly', component: () => import('pages/Yearly.vue')},
      {path: '/Attention', component: () => import('pages/Attention.vue')},
      {path: '/Someday', component: () => import('pages/Someday.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
