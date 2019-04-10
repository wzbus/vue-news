import vue from 'vue'
import toastComponent from './Toast.vue'

const ToastConstructor = vue.extend(toastComponent)

function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text: text,
        showWrap: true,
        showContent: true
      }
    }
  })
  document.body.appendChild(toastDom.$el)
  setTimeout(() => { toastDom.showContent = false }, duration - 500)
  setTimeout(() => { toastDom.show = false }, duration)
}

function toast () {
  vue.prototype.$toast = showToast
}

export default toast
