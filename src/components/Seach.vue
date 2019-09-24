<template>
  <div class="seach">
    <div class="searcher" id="searcher">
      <div class="seaBox wrap">
        <div class="tag">
          <h2>
            热门关键词：
            {{msg}}
          </h2>
        </div>
        <div class="sos" FangDa>
          <input
            type="text"
            class="txt"
            value=""
            placeholder="请输入关键词搜索"
            maxlength="20"
            id="SearchTxt"
          />
          <input type="button" class="submit" value="搜索" id="SearchSubmit" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Seach",
  props: {
    msg: String
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
</style>