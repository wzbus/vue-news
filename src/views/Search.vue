<template>
  <div class="page">
    <div class="header">
      <div class="btn" @click="$router.back()">
        <i class="iconfont icon-right"></i>
      </div>
      <div class="search-wrap">
        <i class="iconfont icon-search"></i>
        <input type="search" class="search" placeholder="头条搜索" autofocus/>
      </div>
      <div class="btn">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.header {
  height: 50px;
  background-color: #d33d3e;
  display: flex;
  align-items: center;
}
.search-wrap {
  height: 80%;
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
::-webkit-input-placeholder {
  color: #333;
  font-size: 18px;
  font-weight: 500;
}
.btn {
  margin: 0 5%;
  font-size: 18px;
  color: #fff;
  text-align: center;
}
.btn i {
  font-size: 18px;
}
</style>
