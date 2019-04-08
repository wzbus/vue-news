<template>
  <div class="toast">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 80%;
  left: 50%;
  width: 25%;
  line-height: 35px;
  margin-left: -12.5%;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #000;
  opacity: 0.7;
  z-index: 99;
}
</style>
