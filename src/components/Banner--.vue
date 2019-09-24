<template>
  <div class="banner-vue">
    <div class="banner" id="banner">
      <ul class="list">
        <li v-for="item in bannerUrl" :key="item.id">
          <router-link :to="item.url">
            <img :src="item.imgUrl" :alt="item.title" />
          </router-link>
        </li>
      </ul>
      <div class="tipBox">
        <div class="tip"></div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>
<style lang="scss">
</style>