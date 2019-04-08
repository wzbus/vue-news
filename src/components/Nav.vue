<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in list" :key="index" :class="{'active': index === active}" @click="change(index)">{{item}}</li>
    </ul>
    <router-link :to="{name:'sort'}" tag="div" class="btn border-left">
      <i class="iconfont icon-icon_threeline_fill"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexNav',
  data () {
    return {
      list: ['关注', '推荐'],
      active: 1
    }
  },
  methods: {
    change (index) {
      this.active = index
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.list = this.list.concat(JSON.parse(localStorage.getItem('user')).sort)
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
}
ul {
  width: 75%;
  height: 40px;
  margin: 0 5%;
  white-space: nowrap;
  overflow-x: scroll;
  float: left;
}
ul::-webkit-scrollbar {
  display: none;
}
li {
  padding: 0 5px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  display: inline-block;
}
.btn {
  width: 15%;
  color: #666;
  text-align: center;
  box-shadow: -5px 0 5px #eee;
  float: right;
}
.active {
  color: #d33d3e;
}
</style>
