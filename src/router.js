import Vue from 'vue'
import Router from 'vue-router'
import Usuarios from './views/Usuarios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Usuarios',
      component: Usuarios
    }
  ]
})
