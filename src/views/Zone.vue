<template>
  <div class="zone">
    <div class="login">
      <div class="login-btn">登录</div>
    </div>
    <div class="user">
      <div class="top">
        <div class="header"></div>
        <div class="right">
          <p class="name">用户名</p>
          <div class="apply">申请认知</div>
        </div>
        <i class="iconfont icon-right top-icon"></i>
      </div>
      <div class="bottom">
        <div class="info">
          <p class="num">0</p>
          <p class="user-desc">头条</p>
        </div>
        <div class="info">
          <p class="num">0</p>
          <p class="user-desc">关注</p>
        </div>
        <div class="info">
          <p class="num">0</p>
          <p class="user-desc">粉丝</p>
        </div>
        <div class="info">
          <p class="num">0</p>
          <p class="user-desc">获赞</p>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="option">
        <div class="option-wrap">
          <i class="iconfont icon-star"></i>
          <p class="option-desc">我的收藏</p>
        </div>
      </div>
      <div class="option">
        <div class="option-wrap">
          <i class="iconfont icon-comment"></i>
          <p class="option-desc">我的评论</p>
        </div>
      </div>
      <div class="option">
        <div class="option-wrap">
          <i class="iconfont icon-zan"></i>
          <p class="option-desc">我的点赞</p>
        </div>
      </div>
      <div class="option">
        <div class="option-wrap">
          <i class="iconfont icon-history"></i>
          <p class="option-desc">浏览历史</p>
        </div>
      </div>
    </div>
    <ul>
      <li class="border-bottom">
        <span>消息通知</span>
        <i class="iconfont icon-right"></i>
      </li>
      <li class="border-bottom">
        <span>私信</span>
        <i class="iconfont icon-right"></i>
      </li>
    </ul>
    <ul>
      <li class="border-bottom">
        <span>用户反馈</span>
        <i class="iconfont icon-right"></i>
      </li>
      <li class="border-bottom">
        <span>系统设置</span>
        <i class="iconfont icon-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'zone'
}
</script>

<style scoped>
.zone {
  width: 100%;
  height: calc(100% - 50px);
  background-color: #eee;
}
.login {
  position: relative;
  width: 100%;
  height: 143px;
  padding-top: 40px;
  text-align: center;
}
.login-btn {
  width: 100px;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  background-color: #F85A59;
}
.login-btn:hover {
  background-color: #F8ABAB;
}
.user {
  background-color: #fff;
}
.top {
  position: relative;
  width: 100%;
  height: 120px;
}
.header {
  position: absolute;
  width: 80px;
  height: 80px;
  margin: 20px 5%;
  background-color: #eee;
  border-radius: 50%;
}
.right {
  position: absolute;
  margin: 40px 0 0 calc(8% + 80px);
}
.name {
  font-size: 16px;
  font-weight: 700;
}
.apply {
  margin-top: 10px;
  padding: 0 10px;
  line-height: 24px;
  border-radius: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  background-color: #F85A59;
}
.bottom {
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  display: flex;
}
.info {
  width: 25%;
}
.num {
  font-size: 24px;
  font-weight: 700;
}
.user-desc {
  margin-top: 5px;
  font-size: 14px;
  color: #333;
}
.middle {
  width: 100%;
  border-top: 10px solid #eee;
  background-color: #fff;
  display: flex;
}
.option {
  width: 25%;
  height: 80px;
  text-align: center;
  display: flex;
  align-items: center;
}
.option-wrap {
  width: 100%;
}
.option i {
  font-size: 30px;
}
.option-desc {
  margin-top: 10px;
  font-size: 14px;
}
ul {
  width: 95%;
  padding-left: 5%;
  background-color: #fff;
  border-top: 10px solid #eee;
}
li {
  width: 100%;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
}
.icon-right {
  padding: 0 5%;
  color: #999;
  float: right;
}
.top-icon {
  position: absolute;
  top: 50px;
  right: 5%;
  padding: 0;
  color: #333;
}
.icon-star {
  color: #FFB15C;
}
.icon-comment {
  color: #4BA5F1;
}
.icon-zan {
  color: #FB7C53;
}
.icon-history {
  color: #25AA8F;
}
</style>
