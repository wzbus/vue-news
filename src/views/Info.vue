<template>
  <div class="page">
    <div class="header">
      <span class="iconfont btn" @click="$router.back()">&#xe720;</span>
      <p class="header-name">编辑资料</p>
      <span class="iconfont btn"></span>
    </div>
    <ul class="list-ul">
      <li class="list-li">
        <span class="item">头像</span>
        <div class="info">
          <div class="pic"></div>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li class="list-li">
        <span class="item">用户名</span>
        <div class="info" @click="editName">
          <span class="info">{{user.name}}</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
    </ul>
    <ul class="list-ul">
      <li class="list-li">
        <span class="item">性别</span>
        <div class="info" @click="editSex">
          <span class="info">{{user.sex}}</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li class="list-li">
        <span class="item">生日</span>
        <div class="info" @click="editBirth">
          <span class="info" v-if="user.birth">{{user.birth}}</span>
          <span class="info blue" v-if="!user.birth">待完善</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
      <li class="list-li">
        <span class="item">地区</span>
        <div class="info" @click="editCity">
          <span class="info" v-if="user.city">{{user.city}}</span>
          <span class="info blue" v-if="!user.city">待完善</span>
          <span class="iconfont">&#xe60f;</span>
        </div>
      </li>
    </ul>
    <btn class="exit" @click="exit">注销账号</btn>
    <div class="mask" v-show="showMask" @click="hide"></div>
    <div class="nameWrap" v-show="showName">
      <p class="nameTitle">请输入用户名</p>
      <input type="text" id="name" v-model="name" maxlength="10">
      <span class="nameLen">{{nameLen}}</span>
      <div class="btnWrap">
        <span class="nameTip">支持中英文、数字</span>
        <btn class="confirm-btn" @click="confirm">确认</btn>
        <btn class="cancel-btn" @click="cancel">取消</btn>
      </div>
    </div>
    <div class="sexWrap" v-show="showSex">
      <ul class="sex-ul">
        <li class="sex-li">
          <input type="radio" name="sex" id="man" value="男" :checked="user.sex==='男'">
          <label for="man" @click="confirmSex">男</label>
        </li>
        <li class="sex-li">
          <input type="radio" name="sex" id="woman" value="女" :checked="user.sex==='女'">
          <label for="woman" @click="confirmSex">女</label>
        </li>
      </ul>
      <btn class="sex-btn" @click="hide">取消</btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      user: {},
      showMask: false,
      showName: false,
      showSex: false,
      name: ''
    }
  },
  mounted () {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.name = this.user.name
    this.sex = this.user.sex
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
    },
    hide () {
      this.showMask = false
      this.showName = false
      this.showSex = false
    },
    editName () {
      this.showMask = true
      this.showName = true
    },
    editSex () {
      this.showMask = true
      this.showSex = true
    },
    editBirth () {
      this.$toast('暂不支持')
    },
    editCity () {
      this.$toast('暂不支持')
    },
    confirmSex () {
      for (let i = 0; i < document.getElementsByName('sex').length; i++) {
        if (document.getElementsByName('sex')[i].checked) {
          this.user.sex = document.getElementsByName('sex')[i].value
        }
      }
      localStorage.setItem('user', JSON.stringify(this.user))
      this.$toast('修改成功')
      this.hide()
    },
    cancel () {
      this.hide()
    },
    confirm () {
      if (this.user.name !== this.name) {
        this.user.name = this.name
        localStorage.setItem('user', JSON.stringify(this.user))
        this.$toast('修改成功')
      }
      this.hide()
    }
  },
  computed: {
    nameLen () {
      return 10 - this.name.length
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
.list-ul {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
}
.list-li {
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
  color: #3e6697;
}
.pic {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
  background-image: url("../../public/img/news.jpg");
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
  background-color: #f8abab;
  border-radius: 25px;
  border: none;
  outline: none;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.nameWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  background-color: #f4f5f7;
}
.nameTitle {
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.btnWrap {
  padding: 10px 0;
}
.nameTip {
  line-height: 30px;
  color: #666;
}
#name {
  width: 90%;
  height: 40px;
  padding: 0 5% 10px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.nameLen {
  position: fixed;
  right: 30px;
  bottom: 60px;
}
.cancel-btn,
.confirm-btn {
  line-height: 30px;
  margin: 0 2px;
  padding: 0 15px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  float: right;
}
.cancel-btn {
  background-color: #999;
}
.confirm-btn {
  background-color: #2991d8;
}
.sexWrap {
  position: fixed;
  left: 15%;
  top: 40%;
  width: 70%;
  padding: 10px 0;
  background-color: #fff;
}
.sex-li {
  position: relative;
  line-height: 50px;
  padding: 0 20px;
  font-size: 16px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.sex-btn {
  margin-right: 10px;
  padding: 0 10px;
  font-size: 16px;
  float: right;
  color: #2991d8;
  background-color: transparent;
}
label {
  flex: 1;
  color: #999;
}
label:before {
  content: "";
  position: absolute;
  right: 20px;
  top: 13px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #999;
}
label:after {
  content: "";
  position: absolute;
  right: 25px;
  top: 18px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #999;
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  color: #2991d8;
}
input[type="radio"]:checked + label:before {
  border-color: #2991d8;
}
input[type="radio"]:checked + label:after {
  background-color: #2991d8;
}
</style>
