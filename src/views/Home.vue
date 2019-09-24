<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Banner :banner-title="bannerTitl" />
    <Seach :msg="keywords" />
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Seach from "@/components/Seach.vue";
import Banner from "@/components/Banner.vue";

export default {
  data() {
    return {
      bannerTitl:'关于我们banner',
      keywords: "精品挖掘机,双人推土机,国家扶持政策"
    };
  },
  name: "home",
  components: {
    // HelloWorld
    Seach,
    Banner
  }
};
</script>
