import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AddUser from './views/AddUsuario'
import ListUsers from './views/ListUsuarios.vue'
import EditUser from './views/EditUsuario.vue'

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
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/list',
      name: 'ListUsers',
      component: ListUsers
    },
    {
      path: '/edit:uid',
      name: 'EditUser',
      component: EditUser,
      props: true,
      beforeEnter: (to, from, next) => {
        //console.log('antes da rota -> usuario detalhe')
        next()
      }
    }
  ]
})
