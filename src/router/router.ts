export const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component:  () => import('@/views/home/mainPage.vue')
      }
    ]
  }
]
