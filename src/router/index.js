import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import {NoRequiereAutenticacion,requiereAutenticacion} from '@/utils/autenticacionRutas'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requiereAutenticacion,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: NoRequiereAutenticacion,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter:requiereAutenticacion
  }
]

const router = new VueRouter({
  routes
})

export default router
