<template>
  <ul class="footer">
    <router-link :to="{name:item.link}" tag="li" class="navli" exact v-for="(item,index) in list" :key="index">
      <i class="iconfont nav-icon" :class="item.link===$route.name?item.icon1:item.icon0"></i>
      <p class="nav-title">{{item.name}}</p>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'indexFooter',
  data () {
    return {
      list: [{
        name: '首页',
        link: 'home',
        icon0: 'icon-home11',
        icon1: 'icon-home1'
      }, {
        name: '历史',
        link: 'history',
        icon0: 'icon-clock',
        icon1: 'icon-clockfill'
      }, {
        name: '我的',
        link: 'zone',
        icon0: 'icon-people',
        icon1: 'icon-people_fill'
      }]
    }
  }
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
