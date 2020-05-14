import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from "../views/login.vue"
import confirmation from "../views/confirmation.vue"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name: 'login',
    component: login
  },
  {
    path:'/confirmation',
    name: 'confirmation',
    component: confirmation 
  }
]

const router = new VueRouter({
  routes
})

export default router
