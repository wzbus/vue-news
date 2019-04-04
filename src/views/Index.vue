<template>
  <div class="index">
    <router-view/>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexFooter from '../components/Footer'
export default {
  name: 'index',
  components: {
    indexFooter
  }
}
</script>

<style scoped>
.index {
  height: 100%;
}
</style>
