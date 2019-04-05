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
      path: '/acticle',
      name: 'art',
      component: () => import('./views/Article')
    }
  ]
})
