import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$hostname = "http://192.168.122.1:8080"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
