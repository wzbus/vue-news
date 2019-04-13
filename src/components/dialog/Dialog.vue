<template>
  <div class="mask" v-if="showMask">
    <div class="dialog" :class="showDialog?'fadeIn':'fadeOut'">
      <div class="wrap">
      <div class="title_wrap">
        <span class="title">{{text.title}}</span>
        <span class="iconfont close" @click="close">&#xe6e9;</span>
      </div>
      <div class="content">{{text.content}}</div>
      <div class="btn_wrap">
        <div class="btn cancel_btn" v-if="text.type === 'confirm'" @click="cancel">{{text.cancelText}}</div>
        <div class="btn" @click="confirm">{{text.confirmText}}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.dialog {
  position: fixed;
  top: 40%;
  left: 8%;
  width: 84%;
  max-height: 80%;
  overflow-y: scroll;
  color: #333;
  background-color: #fff;
  z-index: 9999;
}
.dialog::-webkit-scrollbar {
  display: none;
}
.wrap {
  padding: 15px 5% 0;
}
.title_wrap {
  text-align: center;
}
.title {
  font-size: 18px;
  font-weight: 500;
}
.close {
  color: #999;
  font-size: 18px;
  float: right;
}
.content {
  padding: 30px 0 25px;
  font-size: 16px;
}
.btn_wrap {
  padding: 10px 0;
  border-top: 1px solid #eee;
  text-align: center;
  display: flex;
}
.btn {
  flex: 1;
  line-height: 30px;
  font-weight: 500;
  color: #FFB309;
}
.cancel_btn {
  border-right: 1px solid #eee;
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
