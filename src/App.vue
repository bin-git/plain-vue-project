<template>
  <div id="app">
    <section class="mainTopBox">
      <div class="maiHead">
        <div class="top_box">
          <div class="wrap clearfix">
            <font>欢迎来到湖南好搜官网！</font>
            <a href="javascript:;" id="addFavo">加入收藏</a>
            <a href="javascript:;" id="setHome">设为首页 |</a>
          </div>
        </div>
        <div class="wrap">
          <router-link to="/">
            <!-- <img class="logo fl" src="@/assets/images/logo.png"  /> -->
            <!-- <div :style="`background:url(${Logo}) no-repeat`"></div> -->
            <!-- <img class="logo fl" tishi="可以import/require引入图片" :src="Logo" /> -->
            <img src="./assets/images/logo.png" :alt="title" class="logo fl" />
          </router-link>
          <div class="topAdv fl">
            <h3>15年专注于挖土机制造服务</h3>
            <h4>拥有上千家客户</h4>
          </div>
          <div class="topTel fr">
            <h5>全国服务热线</h5>
            <h6 ig-phone>0731-4962279</h6>
          </div>
          <div class="clear"></div>
        </div>
      </div>

      <div class="nav" id="nav" guodu>
        <ul class="list wrap">
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="about">关于我们</router-link>
          </li>
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
        </ul>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
// 可以import引入图片
// import Logo from '@/assets/images/logo.png';
// require引入图片
const Logo = require("@/assets/images/logo.png");
export default {
  data() {
    return {
      title: "湖南企捷网络科技有限公司",
      Logo
    };
  }
};
</script>


<style lang="scss">
@import "assets/css/common"; /*共用样式 */
@import "assets/css/style"; /* 所有样式 */
</style>
