<template>
  <div class="header">
    <div class="search-wrap">
      <i class="iconfont icon-search"></i>
      <div class="search">头条搜索</div>
    </div>
    <div class="btn">
      <i class="iconfont icon-camera"></i>
      <p class="desc">发布</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #D33D3E;
  display: flex;
  align-items: center;
}
.search-wrap {
  height: 80%;
  margin-left: 5%;
  padding: 0 5px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex: 1;
}
.icon-search {
  padding: 0 10px;
}
.search {
  line-height: 90%;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
}
.btn {
  margin: 0 5%;
  color: #fff;
  text-align: center;
}
.icon-camera {
  font-size: 20px;
}
.desc {
  margin-top: 4px;
  font-size: 12px;
}
</style>
