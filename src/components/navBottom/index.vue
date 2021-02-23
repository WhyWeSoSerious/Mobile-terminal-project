<template>
  <div class=" navBottom">
      <div @click="changeActive('home')" class="navItem">
          <i :class="{active:activeFlag===home}"></i>
      <span :class="{active:activeFlag===home}">首页</span>
      <div @click="changeActive('home')" class="navItem">
          <i :class="{active:activeFlag===home}"></i>
      <span :class="{active:activeFlag===home}">分类</span>
      <div @click="changeActive('home')" class="navItem">
          <i :class="{active:activeFlag===home}"></i>
      <span :class="{active:activeFlag===home}">值得买</span>
      <div @click="changeActive('home')" class="navItem">
          <i :class="{active:activeFlag===home}"></i>
      <span :class="{active:activeFlag===home}">购物车</span>
      <div @click="changeActive('home')" class="navItem">
          <i :class="{active:activeFlag===home}"></i>
      <span :class="{active:activeFlag===home}">个人中心</span>
      </div>

  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: '',
  data() {
      return {
          activeFlag:'home'
      }
  },
  mounted() {
      this.activeFlag = this.$route.path.split('/')[1]
  },
  methods: {
      changeActive(type){
          this.activeFlag = type;
          this.$router.push(`/${type}`);
          if(type==='responal'){
              let user = localStorage.getItem('user');
              if(!user){
                  this.$bus.$emit('isPersonal',false)
              }else{
                  this.$bus.$emit('isPersonal',true)
              }
          }
      }
  },
  computed:{
    ...mapState({
        data:state=>state.data
    })
  }
}
</script>

<style lang="less" >
  .navBottom{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 98px;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #f4f4f4;
    box-sizing: border-box;
  }
  .navBottom .navItem{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .navBottom .navItem i{
    width: 40px;
    height: 40px;
    background-size: 40px;
    margin-bottom: 2px;
  }
  /* 颜色的选中状态 */
  .navBottom .navItem .active{
    color: #DD1A21;
  }
  /* 背景图是设置 */
  .navBottom div:nth-of-type(1) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -250px;
  }
  .navBottom div:nth-of-type(1) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -200px;
  }
  
  .navBottom div:nth-of-type(2) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -150px;
  }
  .navBottom div:nth-of-type(2) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -100px;
  }

  .navBottom div:nth-of-type(3) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -350px;
  }
  .navBottom div:nth-of-type(3) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -300px;
  }

  .navBottom div:nth-of-type(4) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -50px;
  }
  .navBottom div:nth-of-type(4) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: 0px;
  }

  .navBottom div:nth-of-type(5) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -450px;
  }
  .navBottom div:nth-of-type(5) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -400px;
  }
</style>