<template>
  <div class="nav">
    <ul class="border-bottom">
      <li v-for="(item,index) in list" :key="index" :class="{'active': index === active}" @click="change(index)">{{item}}</li>
    </ul>
    <div class="btn border-left">
      <i class="iconfont icon-home"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexNav',
  data () {
    return {
      list: ['推荐', '社会', '国内', '娱乐', '体育', '军事', '科技', '财经', '时尚'],
      active: 0
    }
  },
  methods: {
    change (index) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  line-height: 40px;
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
  padding: 0 6px;
  font-size: 18px;
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
