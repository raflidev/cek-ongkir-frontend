import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home"
import Started from "../views/Started"
import Home2 from "../views/Home2"

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: Home,
      component: Home
   },
   {
      path: '/started',
      name: Started,
      component: Started
   },
   {
      path: '/a',
      name: Home2,
      component: Home2
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router