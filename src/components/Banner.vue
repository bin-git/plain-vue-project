<template>
  <div class="banner-vue">
    <div class="banner swiper-container" id="banner">
      <ul class="list swiper-wrapper">
        <li class="swiper-slide" v-for="item in bannerUrl" :key="item.id">
          <router-link :to="item.url">
            <img :src="item.imgUrl" :alt="item.title" />
          </router-link>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  name: "Banner",
  props: {
    // bannerTitle:String 实际上banner的title充接口中来，故而不传参
  },
  data() {
    return {
      bannerUrl: [
        {
          url: "about",
          imgUrl: require("@/assets/images/banner1.jpg"),
          title: "关于我们banner1",
          id: "1"
        },
        {
          url: "/",
          imgUrl: require("@/assets/images/banner2.jpg"),
          title: "首页banner",
          id: "2"
        },
        {
          url: "about",
          imgUrl: require("@/assets/images/banner3.jpg"),
          title: "关于我们banner2",
          id: "3"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // // 如果需要前进后退按钮
      // nextButton: ".swiper-button-next",
      // prevButton: ".swiper-button-prev",
      // // 如果需要滚动条
      // scrollbar: ".swiper-scrollbar"
    });
  }
};
</script>
<style lang="scss" scope>
.swiper-container {
  width: 100%;
  height: 450px;

  .swiper-slide {
    &.swiper-slide-active {
      z-index: 999;
    }
    img {
      width: 1920px;
      height: 450px;
      display: block;
      position: absolute;
      left: 50%;
      margin-left: -960px;
    }
  }
}
</style>