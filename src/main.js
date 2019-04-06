import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'

Vue.config.productionTip = false
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
