import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/about',
      component: About
    },
    // route level code-splitting
    // this generates a separate chunk (e.g. about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/resume',
      component: () => import('./views/Resume.vue')
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})
