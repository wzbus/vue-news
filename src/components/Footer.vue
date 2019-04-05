<template>
  <ul class="footer">
    <router-link :to="{name:'home'}" tag="li" class="navli" exact>
      <i class="iconfont icon-home1 nav-icon"></i>
      <p class="nav-title">首页</p>
    </router-link>
    <router-link :to="{name:'history'}" tag="li" class="navli">
      <i class="iconfont icon-clock nav-icon"></i>
      <p class="nav-title">历史</p>
    </router-link>
    <router-link :to="{name:'zone'}" tag="li" class="navli">
      <i class="iconfont icon-people nav-icon"></i>
      <p class="nav-title">我的</p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'indexFooter'
}
</script>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  display: flex;
  z-index: 99;
}
.navli {
  padding: 5px 0;
  color: #666;
  background-color: #eee;
  text-align: center;
  flex: 1;
}

.active {
  color: #d33d3e;
}

.nav-icon {
  font-size: 26px;
}

.nav-title {
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
}
</style>
