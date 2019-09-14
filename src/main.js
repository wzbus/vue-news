import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import btn from './components/btn/Btn.js'
import toast from './components/toast/Toast.js'
import dialog from './components/dialog/Dialog.js'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'

Vue.config.productionTip = false
Vue.use(btn)
Vue.use(toast)
Vue.use(dialog)
Vue.prototype.$axios = axios
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (JSON.parse(localStorage.getItem('user'))) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
