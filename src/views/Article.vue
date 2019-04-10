<template>
  <div class="page">
    <div class="header">
      <span class="iconfont btn" @click="$router.back()">&#xe720;</span>
      <p class="header-name">今日头条</p>
      <router-link :to="{name:'search'}" tag="span" class="iconfont btn">&#xe649;</router-link>
    </div>
    <div class="main" v-html="content" @click="restore"></div>
    <div class="footer" v-show="!showComment">
      <div class="comment-fake" @click="toComment">
        <span class="iconfont edit_icon">&#xe60c;</span>
        <span class="comment-desc">写评论...</span>
        <span class="iconfont emoji_icon">&#xe646;</span>
      </div>
      <div class="emoji">
        <span class="iconfont" @click="toList">&#xe8de;</span>
        <span class="iconfont" @click="collect">&#xe6e0;</span>
        <span class="iconfont" @click="share">&#xe600;</span>
      </div>
    </div>
    <div class="comment-wrap" v-show="showComment">
      <div class="comment">
        <input type="text" placeholder="优质评论将会被优先展示" autofocus v-model="comment">
      </div>
      <div class="comment-btn" @click="publish">发布</div>
    </div>
    <ul class="list-wrap" v-show="showList">
      <li class="list-item border-bottom" v-for="(item,index) in list" :key="index">
        <div class="list-pic" :style="{backgroundImage: 'url(' + item.pic + ')'}"></div>
        <div class="list-main">
          <p class="list-name-wrap">
            <span class="list-name">{{item.name}}</span>
            <span class="iconfont" :class="{'zan':item.iszan}" @click="zan(index)">
              &#xe60d;
              <span v-show="item.zan > 0">{{item.zan}}</span>
            </span>
          </p>
          <p class="list-comment">{{item.comment}}</p>
          <p class="list-info">
            <span class="list-time">{{item.time}}分钟前</span>
            <span class="list-comment-btn">回复</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'art',
  data () {
    return {
      data: JSON.parse(this.$route.query.url),
      list: [],
      content: '',
      comment: '',
      showComment: false,
      showList: false
    }
  },
  mounted () {
    axios.get(this.data.url).then((res) => {
      this.content = res.data
    })
    axios.get('/api/comment.json').then((res) => {
      res = res.data
      if (res.reason) {
        this.list = res.data
      }
    })
  },
  methods: {
    restore () {
      this.showComment = false
      this.showList = false
    },
    toComment () {
      this.showComment = true
    },
    toList () {
      this.showList = !this.showList
    },
    publish () {
      if (this.comment) {
        if (localStorage.getItem('user')) {
          let user = JSON.parse(localStorage.getItem('user'))
          let data = {
            'name': user.name,
            'comment': this.comment,
            'zan': 0,
            'iszan': false,
            'time': 1,
            'pic': '../../img/news.jpg' // user.pic
          }
          this.list = this.list.concat(data)
          this.showList = true
          this.$toast('评论成功')
          this.comment = ''
        } else {
          this.$toast('请先登录')
        }
      }
    },
    collect () {
    },
    share () {
    },
    zan (index) {
      if (!this.list[index].iszan) {
        this.list[index].zan++
        this.list[index].iszan = true
      }
    }
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
.footer,
.comment-wrap {
  width: 100%;
  height: 50px;
  padding: 5%;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
}
.comment-fake {
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
.emoji span {
  font-size: 20px;
}
.comment-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
}
.comment {
  width: 80%;
  line-height: 36px;
  margin: 7px 0;
  background-color: #eee;
  border-radius: 20px;
}
.comment input {
  margin: 0 16px;
  background-color: transprent;
}
.comment input::-webkit-input-placeholder {
  color: #999;
}
.comment-btn {
  width: 15%;
  margin-left: 5%;
  font-size: 18px;
  font-weight: 500;
  color: #999;
  text-align: center;
}
.list-wrap {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 50px;
  padding: 5px 5% 0;
  background-color: #fff;
  border-top: 1px solid #eee;
}
.list-item {
  padding: 15px 0;
}
.list-pic {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
}
.list-main {
  margin-left: 50px;
}
.list-name {
  color: #3E6697;
}
.list-name-wrap {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.list-comment {
  margin: 10px 0 5px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
}
.list-info {
  font-size: 12px;
}
.list-comment-btn {
  margin-left: 5px;
}
.zan {
  color: #F85A59;
}
</style>
