import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

// Vue.config.debug = true

new Vue({
  store,
  el: '#app',
  render: h => h(App),
})
