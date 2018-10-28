import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    // route level code-splitting
    // this generates a separate chunk (e.g. about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./views/Resume.vue')
    }
  ]
})
