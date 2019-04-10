<template>
  <div class="page">
    <div class="header">
      <div class="iconfont btn" @click="$router.back()">&#xe720;</div>
      <router-link :to="{name:'zone'}" tag="div" class="iconfont btn">&#xe6e9;</router-link>
    </div>
    <p class="title">账号密码登录</p>
    <form>
      <div class="input-wrap">
        <input type="text" placeholder="用户名" v-model="name">
      </div>
      <div class="input-wrap">
        <input type="password" placeholder="密码" v-model="password">
      </div>
    </form>
    <div class="confirm-btn" @click="login" :class="isFull?'full':'empty'" :disabled="!isFull">进入头条</div>
    <p class="tip">
      点击查看
      <span>“用户协议”</span>和
      <span>“隐私政策”</span>
    </p>
    <p class="link">
      <router-link :to="{name:'register'}" tag="span">注册账号</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user.name === this.name && user.password === this.password) {
          this.$toast('登录成功')
          this.name = ''
          this.password = ''
          this.$router.push('/home')
        } else {
          this.$toast('用户名或密码错误')
        }
      } else {
        this.$toast('该账号不存在')
      }
    }
  },
  computed: {
    isFull () {
      if (this.name !== '' && this.password !== '') {
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
  border: 1px solid #f85a59;
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
  background-color: #f85a59;
}
.empty {
  background-color: #f8abab;
}
.tip {
  margin-top: -5px;
  padding: 5px 0;
  text-align: center;
  font-size: 14px;
}
.tip > span {
  color: #3e6697;
}
.link {
  margin-top: 20px;
  font-size: 16px;
  color: #3e6697;
  text-align: center;
}
</style>
