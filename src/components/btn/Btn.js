import btnComponent from './WaveBtn.vue'

const btn = {
  install: function (Vue) {
    Vue.component('btn', btnComponent)
  }
}

export default btn
