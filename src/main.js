import Vue from 'vue'
import App from './App.vue'
import Server from './Server.vue'

Vue.component('app-server-status', Server)

new Vue({
  el: '#app',
  render: h => h(App)
})
