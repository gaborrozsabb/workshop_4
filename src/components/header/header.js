define(['vue', 'text!./header.vue'], (Vue, template) => {
  Vue.component('judo-header', {
    template,
    data: () => ({
      routes: [
        { name: 'home', path: '/' }
      ],
    }),
    methods: {
      logout: function(e) {
        e.preventDefault();
        window.localStorage.clear();
      }
    }
  });
});
