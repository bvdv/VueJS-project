Vue.component('comp', {
  data: function() {
    return {
      status: 'Normal'
    }
  },
  template: '<p>Server Stat: {{ status }} </p>'
});

new Vue({
  el:'#app',
  
})