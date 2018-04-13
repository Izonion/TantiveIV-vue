import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookie'
require('bootstrap')

Vue.config.productionTip = false

// Tell Vue to use the plugin
Vue.use(VueCookie);

new Vue({
  render: h => h(App)
}).$mount('#app')
