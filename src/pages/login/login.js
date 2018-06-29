define(['vue', 'axios', 'text!./login.vue'], (Vue, axios, template) => {
  return Vue.extend({
    template,
    data: () => ({
      errors: [],
      username: '',
      password: '',
    }),
    methods: {
      checkForm: function () {
        // validate form
      },
      login: function (e) {
        e.preventDefault();
        window.localStorage.setItem('judo-user', true);
        this.$router.push({ name: 'home' })
      }
    }
  })
});
