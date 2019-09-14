import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html',
      component: Home,
      alias: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
