import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: () => import('./views/Index'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home')
        }, {
          path: 'history',
          name: 'history',
          component: () => import('./views/History')
        }, {
          path: 'zone',
          name: 'zone',
          component: () => import('./views/Zone')
        }
      ]
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search')
    }, {
      path: '/sort',
      name: 'sort',
      component: () => import('./views/Sort')
    }, {
      path: '/acticle',
      name: 'art',
      component: () => import('./views/Article')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register')
    }, {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info')
    }
  ]
})
