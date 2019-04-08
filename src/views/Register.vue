<template>
  <div class="page">
    <div class="header">
      <div class="iconfont btn" @click="$router.back()">&#xe720;</div>
      <router-link :to="{name:'zone'}" tag="div" class="iconfont btn">&#xe6e9;</router-link>
    </div>
    <p class="title">账号注册</p>
    <form>
      <div class="input-wrap">
        <input type="text" placeholder="用户名" v-model="name">
      </div>
      <div class="input-wrap">
        <input type="password" placeholder="输入密码" v-model="password">
      </div>
      <div class="input-wrap">
        <input type="password" placeholder="再次输入密码" v-model="repeat">
      </div>
    </form>
    <div class="confirm-btn " @click="register" :class="isFull?'full':'empty'" :disabled="!isFull">注册</div>
    <p class="tip">我同意并阅读<span>“用户协议”</span>和<span>“隐私政策”</span></p>
    <p class="link">
      <router-link :to="{name:'login'}" tag="span">立即登录</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    register () {
      if (this.password === this.repeat) {
        let user = {
          'name': this.name,
          'password': this.password,
          'sort': null,
          'publish': 0,
          'follow': 0,
          'fans': 0,
          'zan': 0
        }
        localStorage.setItem('user', JSON.stringify(user))
        this.name = ''
        this.password = ''
        this.repeat = ''
        this.$router.push('/login')
      } else {
        alert('两次输入不一致')
      }
    }
  },
  computed: {
    isFull () {
      if (this.name !== '' && this.password !== '' && this.repeat === this.password) {
        return true
      } else {
        return false
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
.title {
  margin: 30px 0 40px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.input-wrap {
  width: 80%;
  height: 48px;
  margin: 20px auto;
  border-radius: 24px;
  border: 1px solid #999;
}
input {
  width: calc(100% - 48px);
  line-height: 40px;
  margin: 4px 24px;
  font-size: 16px;
  border: none;
  outline: none;
}
input::-webkit-input-placeholder {
  font-size: 16px;
  font-weight: 500;
  color: #999;
}
.input-wrap:focus-within {
  border: 1px solid #F85A59;
}
.confirm-btn {
  width: 80%;
  line-height: 48px;
  margin: 20px auto;
  border-radius: 24px;
  border: 1px solid;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.full {
  background-color: #F85A59;
}
.empty {
  background-color: #F8ABAB;
}
.tip {
  margin-top: -5px;
  padding: 5px 0;
  text-align: center;
  font-size: 14px;
}
.tip > span {
  color: #3E6697;
}
.link {
  margin-top: 20px;
  font-size: 16px;
  color: #3E6697;
  text-align: center;
}
</style>
