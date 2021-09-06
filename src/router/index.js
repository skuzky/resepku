import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import ResepDetail from '../views/ResepDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resep',
    name: 'Resep',
    component: () => import(/**/'../views/Resep.vue')

  },
  {
    path: '/resep/:id',
    name: 'ResepDetail',
    component: () => import(/**/'../views/ResepDetail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
