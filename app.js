

var vm1 = new Vue({
    el: '#app',
    data: {
      title: 'Title1'
    },
});

setTimeout( function() {
  vm1.title = 'Title1';
}, 3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Title2'
  },
  methods: {
    onClick: function() {
      vm1.title = 'vm1.revers';
    }
  }
})
