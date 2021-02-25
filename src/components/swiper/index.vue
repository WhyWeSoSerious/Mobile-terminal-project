<template>
  <div class="banner">
    <van-swipe class="myswipe" :autoplay="3000" indicator-color="green">
      <van-swipe-item
        v-for="(item, index) in swipeData"
        :key="index"
        class="item"
      >
        <img :src="item" class="banner-img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    swipeData: Array,
  },
};
</script>

<style lang = 'less' scoped>
.banner {
  height: 320px;
  width: 750px;
  
  .item {
    height: 320px;
    width: 750px;
    display: inline-block;
  }
  img {
    height: 320px;
    width: 750px;
  }
  .myswipe {
    height: 320px;
    width: 750px;
    overflow: hidden;
  }
}
</style>
