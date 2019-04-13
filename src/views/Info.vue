<template>
  <div class="page">
    <div class="header">
      <span class="iconfont btn" @click="$router.back()">&#xe720;</span>
      <p class="header-name">编辑资料</p>
      <span class="iconfont btn"></span>
    </div>
    <ul>
      <li>
        <span class="item">头像</span>
        <div class="info">
          <div class="pic"></div>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li>
        <span class="item">用户名</span>
        <div class="info">
          <span class="info">{{user.name}}</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <span class="item">性别</span>
        <div class="info">
          <span class="info">{{user.sex}}</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li>
        <span class="item">生日</span>
        <div class="info">
          <span class="info blue">待完善</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li>
        <span class="item">地区</span>
        <div class="info">
          <span class="info blue">待完善</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
    </ul>
    <button class="exit" @click="exit">注销账号</button>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    exit () {
      this.$dialog({
        content: '此举会清除保存在缓存中的账号信息，不可恢复，是否继续？'
      }).then(() => {
        localStorage.clear()
        this.$router.back()
      }).catch(() => {
        this.$dialog.showMask = false
      })
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-name {
  font-size: 18px;
  font-weight: 500;
}
.btn {
  margin: 0 5%;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
ul {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
}
li {
  width: 90%;
  height: 50px;
  line-height: 50px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
}
.item {
  font-size: 16px;
  font-weight: 500;
}
.info {
  margin-right: 5px;
  color: #666;
}
.blue {
  color: #3E6697;
}
.pic {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
  background-image: url('../../public/img/news.jpg');
  background-size: cover;
  display: inline-block;
  vertical-align: -10px;
}
.exit {
  width: 70%;
  height: 50px;
  margin: 50px 15% 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: #F8ABAB;
  border-radius: 25px;
  border: none;
  outline: none;
}
</style>
