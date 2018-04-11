

var vm1 = new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = !this.showParagraph;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'test';
      this.$refs.heading.innerText = 'test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      //alert('Title changed, new value: ' + value);
    }
  }
});

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});