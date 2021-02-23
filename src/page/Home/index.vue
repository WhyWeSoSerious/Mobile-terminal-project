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
  name: '',
  data() {
    return {
      isShow:true //todo 标识
    }
  },
  mounted() {
    this.$bus.$son('isShow',(eva)=>{
      this.isShow = eva
    })
  },
  components:{
    HomeHeader,HomeContent,cateGroys
  }
}
</script>

<style scoped>

</style>
