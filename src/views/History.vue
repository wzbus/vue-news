<template>
  <div class="page">
    <div class="header">
      <span class="iconfont btn"></span>
      <span class="header-title" @click="backTop">历史上的{{month}}.{{date}}</span>
      <span class="iconfont btn" @click="openCalendar">&#xeb9f;</span>
    </div>
    <calendar class="calendar" v-show="showCalendar" @choseDay="choseDay"></calendar>
    <div class="main" ref="wrapper">
      <div class="container">
        <div class="top-tip">
          <span>{{pulldownMsg}}</span>
        </div>
        <ul class="news-ul">
          <li class="news-li" v-for="(item,index) in list" :key="index">
            <div
              class="year"
              v-show="index === 0 || item.year !== list[index - 1].year"
            >{{item.year}}</div>
            <div class="dot"></div>
            <div class="content">
              <div class="triangle"></div>
              <p class="title">{{item.title}}</p>
              <img class="pic" :src="item.pic" v-show="item.pic">
              <p class="des">{{item.des}}</p>
            </div>
          </li>
        </ul>
        <div class="bottom-tip">
          <span>{{pullupMsg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Calendar from 'vue-calendar-component'
var myDate = new Date()
export default {
  name: 'index',
  components: {
    Calendar
  },
  data () {
    return {
      month: myDate.getMonth() + 1,
      date: myDate.getDate(),
      list: [],
      result: [],
      page: 0,
      pulldownMsg: '下拉刷新',
      pullupMsg: '加载更多',
      freshSucc: false,
      noData: false,
      showCalendar: false
    }
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
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
      this.$axios.get('/api?key=0b36831b3ef3b65eeeeeb342fcd4c190&v=1.0&month=' + this.month + '&day=' + this.date).then((res) => {
        // axios.get('/API/history.json').then((res) => {
        res = res.data
        if (res.reason) {
          this.result = res.result
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
    backTop () {
      this.scroll.scrollTo(0, 0, 1000, 'easing')
    },
    openCalendar () {
      this.showCalendar = !this.showCalendar
    },
    choseDay (date) {
      this.mouth = date.split('/')[1]
      this.date = date.split('/')[2]
      this.list = []
      this.getInfo()
      this.showCalendar = false
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 40px;
  color: #fff;
  background-color: #d33d3e;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  z-index: 9;
}
.header-title {
  flex: 1;
}
.btn {
  width: 10%;
  font-size: 20px;
  font-weight: 500;
}
.calendar {
  position: relative;
  top: 39px;
  z-index: 9;
}
.main {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  overflow: hidden;
}
.container {
  width: 100%;
  min-height: 100%;
}
.news-ul {
  width: 85%;
  margin: 0 5% 0 10%;
  padding: 10px 0;
  border-left: 5px solid #4ba5f1;
}
.news-li {
  position: relative;
  margin: 20px 20px 20px 30px;
}

.year {
  position: absolute;
  top: 50%;
  width: 45px;
  left: -55px;
  margin-top: -55px;
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  color: #d33d3e;
  background-color: #fff;
}
.dot {
  position: absolute;
  top: 50%;
  left: -37px;
  margin-top: -5px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #09c;
}
.content {
  padding: 10px;
  background-color: #ffc;
  border-radius: 10px;
}
.triangle {
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -10px;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent #ffc transparent transparent;
}
.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
}
.des {
  line-height: 20px;
  margin-top: 10px;
  font-size: 14px;
  text-indent: 2em;
}
.pic {
  max-width: calc(100% - 4em);
  max-height: 100px;
  margin: 10px 2em 0;
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
</style>
