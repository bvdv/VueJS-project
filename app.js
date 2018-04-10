

var vm1 = new Vue({
    el: '#app',
    data: {
      title: 'Title1'
    },
    methods: {
      show: function() {
        this.showPar = true;
        this.updateTitle('The VueJS Obj(Updated)');
        console.log(this.$refs)
      },
      updateTitle: function(title) {
        this.title = title;
      },
    }
});

vm1.newProp = 'new';
//console.log(vm1.$data.title);

/*
setTimeout( function() {
  vm1.title = 'Title1';
}, 3000);
*/

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
