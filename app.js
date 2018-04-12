var data = { status: 'Danger!' };

var st_comp = {
  data: function() {
    return {
      status: 'Normal'
    }
    
  },
  template: '<p>Server Stat: {{ status }} <button @click="chSt">Click!</button></p>',
  methods: {
    chSt: function() {
      this.status = 'Warn!';
    }
  }
};

new Vue({
  el:'#app',
  components: {
    'comp':st_comp
  }
  
})
 
new Vue({
  el:'#app2',
  
})