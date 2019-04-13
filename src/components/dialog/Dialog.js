import vue from 'vue'
import dialogComponent from './Dialog.vue'

const DialogConstructor = vue.extend(dialogComponent)

function showDialog (text) {
  return new Promise((resolve, reject) => {
    const dialogDom = new DialogConstructor({
      el: document.createElement('div'),
      data () {
        return {
          showMask: true,
          showDialog: true,
          text: {
            title: text.title || '消息提示',
            content: text.content || '确认此操作',
            cancelText: text.cancelText || '取消',
            confirmText: text.confirmText || '确认',
            type: text.type || 'confirm'
          }
        }
      },
      methods: {
        close () {
          this.showMask = false
        },
        cancel () {
          reject(new Error())
          this.showMask = false
        },
        confirm () {
          resolve(new Error())
          this.showMask = false
        }
      }
    })
    document.body.appendChild(dialogDom.$el)
  })
}

function dialog () {
  vue.prototype.$dialog = showDialog
}

export default dialog
