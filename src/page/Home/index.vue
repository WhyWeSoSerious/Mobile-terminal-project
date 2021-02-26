<template>
  <div id="home">
    <HomeHeader/>
    <HomeContent v-show="isShow" ></HomeContent>
    <cateGroys  v-show="!isShow"></cateGroys>
  </div>
</template>
<script>
import HomeHeader from "../../components/HomeHeader"
import HomeContent from "../../components/HomeContent"
import cateGroys from "../../components/cateGroys"
export default {
  data() {
    return {
      isShow:true,
    }
  },
  mounted() {
    //?绑定全局事件总线
    this.$bus.$on('isShow',(v)=>{
      this.isShow = v
    })
  },
  components:{
    HomeHeader,
    HomeContent,
    cateGroys,
  }
}
</script>
<style lang="less" scoped>

</style>