

new Vue({
    el: '#app',
    data: {
      counter: 0,
      x: 0,
      y: 0
  },
  methods: {
    incr: function() {
      this.counter++;
    },
    MouseCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});