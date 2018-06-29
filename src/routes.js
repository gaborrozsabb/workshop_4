define([], () => ([
  {
    path: '/',
    name: 'home',
    component: resolve => require(['./pages/home/home'], resolve),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./pages/login/login'], resolve),
  }
]));
