<template>
  <div class="page">
    <div class="header">
      <div class="iconfont btn" @click="$router.back()">&#xe720;</div>
      <p class="header-name">今日头条</p>
      <router-link :to="{name:'search'}" tag="div" class="iconfont btn">&#xe649;</router-link>
    </div>
    <div class="main" v-html="content"></div>
    <div class="footer">
      <div class="comment">
        <span class="iconfont edit_icon">&#xe60c;</span>
        <span class="comment-desc">写评论...</span>
        <span class="iconfont emoji_icon">&#xe646;</span>
      </div>
      <div class="emoji">
        <i class="iconfont icon-comment"></i>
        <i class="iconfont icon-star"></i>
        <i class="iconfont icon-share"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'art',
  data () {
    return {
      data: JSON.parse(this.$route.query.url),
      content: ''
    }
  },
  mounted () {
    axios.get(this.data.url).then((res) => {
      this.content = res.data
    })
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-name {
  color: #666;
  font-size: 20px;
  font-weight: 700;
}
.btn {
  margin: 0 5%;
  font-size: 20px;
  text-align: center;
}
.top-icon {
  margin: 0 3%;
}
.main {
  width: 100%;
  height: calc(100% - 102px);
  padding: 0 2%;
  overflow-y: scroll;
}
.main::-webkit-scrollbar {
  display: none;
}
.footer {
  width: 100%;
  height: 50px;
  padding: 5%;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
}
.comment {
  width: 55%;
  line-height: 36px;
  margin: 7px 0;
  background-color: #eee;
  border-radius: 20px;
}
.edit_icon {
  margin: 0 4px 0 16px;
  color: #333;
  font-size: 20px;
}
.emoji_icon {
  margin-right: 8px;
  font-size: 20px;
  float: right;
}
.emoji {
  margin-left: 10%;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.emoji i {
  font-size: 24px;
}
</style>
