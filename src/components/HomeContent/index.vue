<template>
  <div class="homeContent">
    <Swiper :swipeData="swiperImages"/>
    <!-- 三个横向标题 -->
    <ul class="grow">
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
        </i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
        </i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
        </i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- kingkongMouddle 图片部分 -->
    <ul class="kingKongModule" v-if="indexData.kingKongModule">
      <li v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
        <img :src="item.picUrl">
        <span>{{item.text}}</span>
      </li>
    </ul>
    <!-- 新人区 -->
    <div class="newPerson">
      <div class="top">
        <!-- <img src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75" alt=""> -->
      </div>
      <div class="bottom">
        <img src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
        <img src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0">
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="newGift">
      <div class="title">新人专享礼</div>
      <div class="cotent">
        <div class="left">
          <p>新人专享礼包</p>
          <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
        </div>
        <div class="right">
          <div class="fuli">
            <div class="text">
              <p class="fulishe">福利社</p>
              <p class="dayPrice">今日特价</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            <div class="discount">
              <div class="line1">￥82.8</div>
              <div class="line2">￥88</div>
            </div>
          </div>
          <div class="xinren">
            <div class="text">
              <p class="fulishe">新人拼团</p>
              <p class="baoyou">1元起包邮</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            <div class="discount">
              <div class="line1">￥1</div>
              <div class="line2">￥13.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="categoryHotSellModule">
      <div class="moduleTitle" v-if="indexData.categoryHotSellModule">{{indexData.categoryHotSellModule.title}}</div>
      <div class="content">
        <div class="line1" v-if="indexData.categoryHotSellModule">
          <div class="bigCom" v-for="(item, index) in indexData.categoryHotSellModule.categoryList.slice(0,2)" :key="index">
            <p>{{item.categoryName}}</p>
            
            <img :src="item.picUrl">
          </div>
       
        </div>
        <div class="line2" v-if="indexData.categoryHotSellModule">
          <div class="item" v-for="(item, index) in indexData.categoryHotSellModule.categoryList.slice(2)" :key="index">
            <p>{{item.categoryName}}</p>
            <img :src="item.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="flashSaleModule">
      <div class="moduleTitle">
        <div class="left">
          <span>限时购</span>
          <div class="countDown">
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }} </span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
        <div class="right">
          <span>更多</span>
          <i></i>
        </div>
      </div>
      <div class="content" v-if="indexData.flashSaleModule">
        <div class="flashSaleItem" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
          <div class="imgWrap">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="price">
            <span>￥{{item.activityPrice}}</span>
            <span>￥{{item.originPrice}}</span>
          </div>
        </div>
        
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="newItemList">
      <div class="moduleTitle">
        <div class="left">
          <span>新品首发</span>
        </div>
        <div class="right">
          <span>更多</span>
          <i></i>
        </div>
      </div>
      <div class="content" v-if="indexData.newItemList">
        <div class="flashSaleItem" v-for="(item, index) in indexData.newItemList.slice(0,6)" :key="index">
          <div class="imgWrap">
            <img :src="item.listPicUrl" alt="">
          </div>
          <div class="price">
            <span>{{item.name}}</span>
            <span>￥{{item.limitedFlag}}</span>
          </div>
        </div>
        
      </div>
    </div>
    <!-- 底部两个图片 -->
    <div class="sceneLightShoppingGuideModule" v-if="indexData.sceneLightShoppingGuideModule">
      <div class="item" v-for="(item, index) in indexData.sceneLightShoppingGuideModule.slice(0,2)" :key="index">
        <p>{{item.styleItem.title}}</p>
        <p>{{item.styleItem.desc}}</p>
        <div class="images">
          <img :src="item.styleItem.picUrlList[0]">
          <img :src="item.styleItem.picUrlList[1]">
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="bd">
        <div class="left">下载APP</div>
        <div class="right">电脑版</div>
      </div>
      <p class="copyright">
        网易公司版权所有 © 1997-2020 <br>
        食品经营许可证：JY13301080111719
      </p>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import Swiper from "../swiper"
//?引入底部导航

export default {
  data() {
    return {
      time: 2 * 60 * 60 * 1000,//todo 倒计时
     
      swiperImages:[
        'https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/e4b5ab7f6bb4b286b9fe18e42bb1f731.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/8104acf1cc1514a88ea0b7d030e9a55e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        
      ]
    }
  },
  mounted() {
    //?获取首页信息
    this.indexe()
  },
  methods: {
    ...mapActions({
      indexe:'indexe',
    }),
    //?轮播图发生变化的回调
    onChange(index) {
      
      this.current = index;
    },
    //?点击指示器的回调
    changeSwiperItem(index){
      this.$refs.vanSwiper.swipeTo(index);
    }
  },
  computed: {
    ...mapState({
      indexData:state=>state.home.indexData,
    })
  },
  components:{
    Swiper,
  }
}
</script>
<style lang="less" scoped>
  .homeContent 
    {
      margin-top: 148px;
      margin-bottom: 88px;
      background-color: #eee;
    
      .grow{
        display: flex;
        justify-content: space-around;
        height: 72px;
        align-items: center;
        color: #333;
        padding-bottom: 8px;
        background-color: #fff;
        i {
          vertical-align: middle;
          img{
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }
        }
      }
      // kingkong图片
      .kingKongModule{
        display: flex;
        flex-wrap: wrap;
        // height: 372px;
        background-color: #fff;
        li{
          display: flex;
          flex-direction: column;
          color: rgb(51, 51, 51);
          width: 110px;
          height: 156px;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 25px;
          img{
            width: 110px;
            height: 110px;
            margin-bottom: 10px;
          }
        }
      }
      // 新人
      .newPerson{
        // margin-top: 30px;
        height: 548px;
        background-color: #fff;
        .top{
          width: 100%;
          height: 321px;
          background: url("https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75");
          background-size: 100%;
        }
        .bottom{
          height: 225px;
          background-color:rgb(230, 73, 4);
          text-align: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
          img{
            width: 351px;
            height: 186px;
            margin-top: 0px;
            &:nth-of-type(1){
              margin-right: 10px;
            }
          }
        }
      }
      .newGift{
        height: 558px;
        background-color: #fff;
        margin-top: 20px;
        .title{
          background-color: #fff;
          height: 90px;
          font-size: 34px;
          color: #333;
          text-align: center;
          line-height: 90px;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            left: 240px;
            top:45px;
            width: 28px;
            height: 3px;
            background-color: #333;
          }
          &::after{
            content: '';
            position: absolute;
            right: 240px;
            top:45px;
            width: 28px;
            height: 3px;
            background-color: #333;
          }
        }
        .cotent{
          display: flex;
          padding: 0px 30px;
          .left{
              width: 343px;
              height: 434px;
              background-color: #F9E9CF;
              margin-right: 4px;
              p{
                margin: 40px 0px 30px 30px;
                font-size: 32px;
              }
              img{
                width: 258px;
                height: 257px;
                margin-left: 50px;
              }
            }
          .right{
            width: 344px;
            height: 434px;
            .discount{
              position: absolute;
              top: 20px;
              right: 30px;
              width: 80px;
              height: 80px;
              opacity: .8;
              background: #F59524;
              border-radius: 50%;
              padding-top: 10px;
              color: #fff;
              text-align: center;
              box-sizing: border-box;
              // letter-spacing:-1px;
              -webkit-transform-origin-x: 0;
              
              .line1{
                font-size: 24px;
                // -webkit-transform: scale(0.90);
              }
              .line2{
                text-decoration: line-through;
                font-size: 0.2rem;
                transform: scale(0.80);
              }
            }
            img{
                width: 200px;
                height: 200px;
                position: absolute;
                right: 0;
                top: 20px;
              }
            .text{
                .fulishe{
                  font-size: 32px;
                  margin-bottom: 6px;
                }
                .dayPrice{
                  color: #666;
                }
              }
            .fuli{
              height: 215px;
              background-color: #FBE2D3;
              border-radius: 4px;
              margin-bottom: 4px;
              padding: 30px 0px 0px 30px;
              position: relative;
              box-sizing: border-box;
            }
            .xinren{
              height: 215px;
              background-color: #FFECC2;
              padding: 30px 0px 0px 30px;
              position: relative;
              box-sizing: border-box;
            }
          }
          }
      }
      // 类目热销榜
      .categoryHotSellModule{
        height: 710px;
        margin-top: 20px;
        background-color: #fff;
        padding: 0 30px;
        .moduleTitle{
          height: 100px;
          line-height: 100px;
          font-size: 34px;
          color: #333;
        }
        .content{
          height: 610px;
          .line1{
            display: flex;
            .bigCom{
              width: 340px;
              height: 200px;
              position: relative;
              border-radius: 4px;
              p{
                font-size: 28px;
                margin-top: 60px;
                margin-left: 20px;
                color: #333;
                position: relative;
                &::after{
                  content: '';
                  position: absolute;
                  left: 0;
                  bottom: -16px;
                  width: 48px;
                  height: 4px;
                  background-color: #333;
                }
              }
              img{
                position: absolute;
                top: 0;
                right: 0;
                width: 200px;
                height: 200px;
              }
              &:nth-of-type(1){
                background: #F9F3E4;
                margin-right: 10px;
              }
              &:nth-of-type(2){
                background: #EBEFF6;
              }
            }
            // .big-item1{
            //   background: #F9F3E4;
            //   margin-right: 10px;
            // }
            // .big-item2{
            //   background: #EBEFF6;
            // }
          }
          .line2{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 10px;
            .item{
              width: 165px;
              height: 180px;
              background: #F5F5F5;
              border-radius: 4px;
              margin-bottom: 10px;
              text-align: center;
              p{
                color: #333;
                margin-top: 10px;
                margin-bottom: 10px;
              }
              img{
                width: 120px;
                height: 120px;
              }
            }
          }
        }
      }
      // 限时购
      .flashSaleModule{
        margin-top: 20px;
        height: 700px;
        padding: 0px 20px 0px 30px;
        background-color: #fff;
        .moduleTitle{
          height: 100px;
          font-size: 32px;
          color: #333;
          line-height: 100px;
          display: flex;
          justify-content: space-between;
          .left{
            width: 290px;
            display: flex;
            .countDown{
              margin-top: 30px;
              margin-left: 20px;
              .colon {
                display: inline-block;
                margin: 0 8px;
                color: #333;
              }
              .block {
                display: inline-block;
                width: 36px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                background-color: #333;
                border-radius: 6px;
              }
            }
            
          }
          .right{
            display: flex;
            align-items: center;
            font-size: 30px;
            margin-right: 14px;
            i{
              width: 13px;
              height: 23px;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png?imageView&type=webp);
              background-size: 100% 100%;
              margin-left: 5px;
            }
          }
        }
        .content{
          height: 600px;
          display: flex;
          flex-wrap: wrap;
          .flashSaleItem{
            width: 216px;
            height: 300px;
            border-radius: 4px;
            margin-right: 17px;
            .imgWrap{
              width: 216px;
              height: 216px;
              background: #F5F5F5;
              img{
                width: 216px;
                height: 216px;
              }
              
            }
            .price{
              margin-top: 16px;
              span{
                display: inline-block;
                letter-spacing:-1px;
                &:nth-of-type(1){
                  font-size: 28px;
                  color: #DD1A21;
                  margin-left: 20px;
                  margin-right: 10px;
                }
                &:nth-of-type(2){
                  font-size: 14px;
                  color: #999;
                  text-decoration: line-through;
                }
              }
            }
          }
        }
      }
      // 新品首发
      .newItemList{
        margin-top: 20px;
        height: 946px;
        padding: 0px 20px 0px 30px;
        background-color: #fff;
        .moduleTitle{
          height: 100px;
          font-size: 32px;
          color: #333;
          line-height: 100px;
          display: flex;
          justify-content: space-between;
          .left{
            width: 290px;
            display: flex;
            .countDown{
              margin-top: 30px;
              margin-left: 20px;
              .colon {
                display: inline-block;
                margin: 0 8px;
                color: #333;
              }
              .block {
                display: inline-block;
                width: 36px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                background-color: #333;
                border-radius: 6px;
              }
            }
            
          }
          .right{
            display: flex;
            align-items: center;
            font-size: 30px;
            margin-right: 14px;
            i{
              width: 13px;
              height: 23px;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png?imageView&type=webp);
              background-size: 100% 100%;
              margin-left: 5px;
            }
          }
        }
        .content{
          height: 820px;
          display: flex;
          flex-wrap: wrap;
          .flashSaleItem{
            width: 216px;
            height: 410px;
            border-radius: 4px;
            margin-right: 17px;
            .imgWrap{
              width: 216px;
              height: 216px;
              background: #F5F5F5;
              img{
                width: 216px;
                height: 216px;
              }
              
            }
            .price{
              margin-top: 16px;
              span{
                display: inline-block;
                letter-spacing:-1px;
                &:nth-of-type(1){
                  font-size: 18px;
                  color: #333;
                  height: 72px;
                  line-height: 36px;
                  display:-webkit-box;
                  -webkit-line-clamp:2;
                  -webkit-box-orient:vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                &:nth-of-type(2){
                  font-size: 32px;
                  color: #DD1A21;
                  margin-top: 5px;
                  margin-left: -8px;
                }
              }
            }
          }
        }
      }
      // 底部两个图片
      .sceneLightShoppingGuideModule{
        margin-top: 20px;
        height: 308px;
        padding: 16px 30px;
        background-color: #fff;
        display: flex;
        box-sizing: border-box;
        .item{
          width: 343px;
          height: 264px;
          margin-right: 4px;
          background-color: #F5F5F5;
          padding: 20px 0px 0px 30px;
          box-sizing: border-box;
          p{
            &:nth-of-type(1){
              font-size: 32px;
              margin-bottom: 5px;
            }
            &:nth-of-type(2){
              font-size: 18px;
              color: #666;
            }
          }
          img{
            width: 150px;
            height: 150px;
          }
        }
        
      }
      // 底部
      .bottom{
        margin-top: 20px;
        height: 244px;
        border-top: 1px solid rgba(0,0,0,.15);
        background-color: #414141;
        display: flex;
        flex-direction: column;
        align-items: center;
        .bd{
          color: #fff;
          display: flex;
          font-size: 26px;
          margin-top: 50px;
          div{
            width: 172px;
            height: 62px;
            border: 1px solid #999;
            border-radius: 4px;
            line-height: 60px;
            text-align: center;
            &:nth-of-type(1){
              margin-right: 60px;
            }
          }
        }
        .copyright{
          margin-top: 30px;
          text-indent: 30px;
          color: #999;
        }
      }
    }
</style>