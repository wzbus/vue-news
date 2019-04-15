<template>
  <div class="home">
    <index-header></index-header>
    <index-nav @change="change"></index-nav>
    <div class="main" ref="wrapper">
      <div class="container">
        <div class="top-tip">
          <span>{{pulldownMsg}}</span>
        </div>
        <ul>
          <router-link
            :to="{name:'art',query:{url:JSON.stringify(item)}}"
            tag="li"
            class="border-bottom"
            v-for="(item,index) in list"
            :key="index"
          >
            <p class="title">{{item.title}}</p>
            <div class="picture">
              <div
                class="pic"
                :style="{backgroundImage: 'url(' + item.thumbnail_pic_s + ')'}"
                v-if="item.thumbnail_pic_s"
              ></div>
              <div
                class="pic"
                :style="{backgroundImage: 'url(' + item.thumbnail_pic_s02 + ')'}"
                v-if="item.thumbnail_pic_s02"
              ></div>
              <div
                class="pic"
                :style="{backgroundImage: 'url(' + item.thumbnail_pic_s03 + ')'}"
                v-if="item.thumbnail_pic_s03"
              ></div>
            </div>
            <div class="info">
              <span class="author">{{item.author_name}}</span>
              <span class="time">{{item.date}}</span>
            </div>
          </router-link>
        </ul>
        <div class="bottom-tip">
          <span>{{pullupMsg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexHeader from '../components/Header'
import indexNav from '../components/Nav'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'index',
  components: {
    indexHeader,
    indexNav
  },
  data () {
    return {
      sort: 'top',
      list: [],
      result: [],
      page: 0,
      pulldownMsg: '下拉刷新',
      pullupMsg: '加载更多',
      freshSucc: false,
      noData: false
    }
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        },
        pullDownRefresh: {
          threshold: 80
        }
      })
      this.scroll.on('scroll', () => {
        if (this.scroll.y - this.scroll.maxScrollY < 50) {
          this.pullUp()
        }
      })
      this.scroll.on('touchEnd', () => {
        if (this.scroll.y - this.scroll.maxScrollY < 50) {
          this.pullUp()
        }
      })
      this.scroll.on('pullingDown', () => {
        if (!this.freshSucc) {
          this.pulldownMsg = '刷新中'
          this.freshSucc = true
          this.$toast('刷新成功')
          setTimeout(() => {
            this.pulldownMsg = '下拉刷新'
            this.freshSucc = false
          }, 1000)
        }
        this.scroll.finishPullDown()
      })
    },
    getInfo () {
      // axios.get('/API/data.json').then((res) => {
      axios.get('/index?type=' + this.sort + '&key=9ababa1ad88d991ec221da4367dbff59').then((res) => {
        res = res.data
        if (res.reason) {
          this.result = res.result.data
          this.pushInfo()
          this.$nextTick(() => {
            this.init()
          })
        }
      })
    },
    pushInfo () {
      for (let i = 0; i < 10; i++) {
        if (this.result[10 * this.page + i]) {
          this.list.push(this.result[10 * this.page + i])
        } else {
          this.pullupMsg = '无更多数据'
          this.noData = true
          break
        }
      }
    },
    pullUp () {
      if (!this.freshSucc && !this.noData) {
        this.page++
        this.pushInfo()
        this.freshSucc = true
        setTimeout(() => {
          this.freshSucc = false
        }, 1000)
      }
    },
    change (data) {
      this.sort = data
      this.list = []
      this.getInfo()
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
.main {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: calc(100% - 140px);
  overflow: hidden;
}
.container {
  width: 100%;
}
.top-tip {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #666;
}
.bottom-tip {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #666;
  background: #eee;
}
ul {
  width: 90%;
  padding: 0 5%;
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
