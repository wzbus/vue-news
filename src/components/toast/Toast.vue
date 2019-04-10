<template>
<div class="toast">
  <span class="text" v-if="showWrap" :class="showContent?'fadeIn':'fadeOut'">{{text}}</span>
</div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 80%;
  width: 100%;
  line-height: 24px;
  text-align: center;
}
.text {
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: rgba(0,0,0,0.7);
  z-index: 99;
}
.fadeIn {
  animation: animateIn 0.5s;
}
.fadeOut {
  animation: animateOut 0.5s;
  opacity: 0;
}
@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}
@keyframes animateOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
