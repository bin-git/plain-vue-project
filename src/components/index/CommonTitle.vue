<template>
  <div>
    <div class="iproTitle">
      <div class="iproTitleBox wrap">
        <h1>$item.name</h1>
        <h2>$item.title</h2>
        <p></p>
      </div>
      <a href="$item.pagename" class="imore">home+</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){

    },
    props:{
        etitle,
        
    }
};
</script>