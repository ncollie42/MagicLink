import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$hostname = "https://173.255.248.250:8443"
// Vue.prototype.$hostname = "http://10.10.134.112:8080"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
