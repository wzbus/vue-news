<template>
  <button>
    <canvas class="ripple" @click="ripple"></canvas>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'waveBtn',
  props: {
    speed: {
      type: Number,
      default: 4
    },
    opacity: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {
      color: '',
      radius: 0,
      oCanvas: null,
      context: null,
      initialized: false,
      speedOpacity: 0,
      timer: null,
      origin: {}
    }
  },
  methods: {
    getStyle (el, attr, pseudoClass = null) {
      return window.getComputedStyle(el, pseudoClass)[attr]
    },
    getStyleNumber (el, attr, pseudoClass = null) {
      try {
        const val = this.getStyle(el, attr, pseudoClass)
        return parseFloat(val)
      } catch (e) {
        console.error(e)
      }
    },
    init (el) {
      const oBtn = el.parentElement
      this.color = this.getStyle(el.parentElement, 'color')
      const w = this.getStyleNumber(oBtn, 'width')
      this.speedOpacity = (this.speed / w) * this.opacity
      el.width = w
      el.height = this.getStyleNumber(oBtn, 'height')
      this.context = el.getContext('2d')
    },
    ripple (event) {
      if (this.timer) {
        window.cancelAnimationFrame(this.timer)
      }
      this.el = event.target
      if (!this.initialized) {
        this.initialized = true
        this.init(this.el)
      }
      this.radius = 0
      this.origin.x = event.offsetX
      this.origin.y = event.offsetY
      this.context.clearRect(0, 0, this.el.width, this.el.height)
      this.el.style.opacity = this.opacity
      this.draw()
    },
    draw () {
      this.context.beginPath()
      this.context.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI, false)
      this.context.fillStyle = this.color
      this.context.fill()
      this.radius += this.speed
      this.el.style.opacity -= this.speedOpacity
      if (this.radius < this.el.width || this.el.style.opacity > 0) {
        this.timer = window.requestAnimationFrame(this.draw)
      } else {
        this.context.clearRect(0, 0, this.el.width, this.el.height)
        this.el.style.opacity = 0
      }
    }
  },
  destroyed () {
    if (this.timer) {
      window.cancelAnimationFrame(this.timer)
      this.timer = null
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  overflow: hidden;
}
.ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
