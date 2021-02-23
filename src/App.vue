<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-if="isPersonal"/>
  </div>
</template>

<script>

import NavBottom from "./components/navBottom/index"
export default {
  name: 'App',
  components: {
   NavBottom
  },
  data() {
    return {
      isPersonal:true
    }
  },
  mounted() {
    if(this.$route.path.split('/')[1]==='personal'){
      this.isPersonal = false;

    }
    if(this.$route.path==='responal'){
      this.isPersonal = false
    }
    this.$bus.$on('isPersonal',(isPersonal)=>{
      this.isPersonal = isPersonal
    })
  },
}
</script>

<style>

  @import url('./assets/css/reset.css');
  @import url('./assets/font/iconfont.css');
</style>
