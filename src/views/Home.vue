<template>
  <div class="home">
    <index-header></index-header>
    <index-nav></index-nav>
    <ul>
      <router-link :to="{name:'art'}" tag="li" class="border-bottom" v-for="(item,index) in list" :key="index">
        <p class="title">{{item.title}}</p>
        <div class="picture">
          <div class="pic" :style="{backgroundImage: 'url(' + item.thumbnail_pic_s + ')'}" v-if="item.thumbnail_pic_s"></div>
          <div class="pic" :style="{backgroundImage: 'url(' + item.thumbnail_pic_s02 + ')'}" v-if="item.thumbnail_pic_s02"></div>
          <div class="pic" :style="{backgroundImage: 'url(' + item.thumbnail_pic_s03 + ')'}" v-if="item.thumbnail_pic_s03"></div>
        </div>
        <div class="info">
          <span class="author">{{item.author_name}}</span>
          <span class="time">{{item.date}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import indexHeader from '../components/Header'
import indexNav from '../components/Nav'
import axios from 'axios'
var page = 0
var result = []
export default {
  name: 'index',
  components: {
    indexHeader,
    indexNav
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/data.json').then((res) => {
        res = res.data
        if (res.reason) {
          result = res.result.data
          this.pushInfo()
        }
      })
    },
    pushInfo () {
      for (let i = 0; i < 8; i++) {
        if (result[8 * page + i]) {
          this.list.push(result[8 * page + i])
        }
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}
ul {
  width: 90%;
  height: calc(100% - 140px);
  padding: 0 5%;
  overflow-y: scroll;
}
ul::-webkit-scrollbar {
  display: none;
}
li {
  width: 100%;
  padding: 10px 0;
}
.title {
  line-height: 22px;
  font-size: 18px;
  font-weight: 500;
}
.picture {
  width: 100%;
  margin-top: 10px;
}
.pic {
  width: 32%;
  height: 0;
  padding-top: 20%;
  background-position: center;
  background-size: cover;
  display: inline-block;
}
.pic:nth-child(2) {
  margin: 0 2%;
}
.info {
  margin-top: 10px;
  font-size: 14px;
  color: #999;
}
.info > span:not(:first-child) {
  margin-left: 10px;
}
</style>
