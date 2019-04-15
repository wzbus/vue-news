<template>
  <div class="page">
    <div class="header">
      <div class="iconfont btn" @click="back">&#xe6e9;</div>
    </div>
    <div class="title-wrap">
      <span class="title">我的频道</span>
      <span class="tip">点击进入频道</span>
      <div class="edit-btn" @click="adjust">
        <span v-show="!edit">编辑</span>
        <span v-show="edit">完成</span>
      </div>
    </div>
    <ul class="sort-wrap">
      <li class="sort my" v-for="(item,index) in myList" :key="index" @click="remove(index)">
        <span class="iconfont remove" v-show="edit && index > 1">&#xe6e9;</span>
        {{item}}
      </li>
    </ul>
    <div class="title-wrap">
      <span class="title">频道推荐</span>
      <span class="tip">点击添加频道</span>
    </div>
    <ul class="sort-wrap">
      <li class="iconfont sort all" v-for="(item,index) in allList" :key="index" @click="add(index)">&#xe6df;{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sort',
  data () {
    return {
      user: null,
      edit: false,
      myList: ['推荐', '国内'],
      allList: ['社会', '娱乐', '体育', '军事', '科技', '财经', '时尚']
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.user = JSON.parse(localStorage.getItem('user'))
      if (this.user.sort) {
        this.myList = this.myList.concat(this.user.sort)
      }
    }
  },
  methods: {
    add (index) {
      this.myList = this.myList.concat(this.allList[index])
      this.allList.splice(index, 1)
      this.user.sort = this.myList.slice(2, this.myList.length)
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    adjust () {
      this.edit = !this.edit
      if (!this.edit) {
        this.user.sort = this.myList.slice(2, this.myList.length)
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    },
    remove (index) {
      if (this.edit && index > 1) {
        this.allList = this.allList.concat(this.myList[index])
        this.myList.splice(index, 1)
      }
    },
    back () {
      if (this.edit) {
        this.$dialog({
          content: '未保存更改，确认离开？'
        }).then(() => {
          this.$router.back()
        }).catch(() => {
          this.$dialog.showMask = false
        })
      } else {
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin: 0 5%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
.title-wrap {
  width: 90%;
  height: 50px;
  line-height: 50px;
  padding: 0 5%;
  clear: both;
}
.title {
  font-size: 18px;
  font-weight: 500;
}
.tip {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}
.edit-btn {
  float: right;
  line-height: 26px;
  margin: 11px 0;
  padding: 0 10px;
  font-size: 16px;
  color: #f85a59;
  border: 1px solid #f85a59;
  border-radius: 13px;
}
.sort-wrap {
  width: 100%;
}
.sort {
  position: relative;
  width: 20%;
  margin: 5px 2%;
  float: left;
  padding: 12px 0;
  font-size: 16px;
  text-align: center;
}
.my {
  background-color: #F4F5F7;
}
.all {
  font-weight: 500;
  box-shadow: 2px -2px 5px #eee;
}
.remove {
  position: absolute;
  top: 5px;
  right: 3px;
  font-size: 12px;
}
</style>
