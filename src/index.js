require.config({
  baseUrl: '',
  paths: {
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min',
    'axios': 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min',
    'bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min',
    'vue_router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }

});

require(['vue', 'vue_router', 'routes', './components/header/header'], (Vue, VueRouter, AppRoutes) => {

  Vue.use(VueRouter);

  const router = new VueRouter({
    mode: 'hash',
    routes: AppRoutes,
    linkActiveClass: 'nav-item',
    linkExactActiveClass: 'active'
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!window.localStorage.getItem('judo-user')) {
        next({ path: '/login' });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  new Vue({
    el: '#app',
    router: router
  });

});
