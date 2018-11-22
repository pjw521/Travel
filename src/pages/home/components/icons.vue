<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgurl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data(){
      return{
          iconList:[
              {
                  id:'0001',
                  imgurl:require("../../../assets/images/entrances_03.png"),
                  desc:"签证"
              },
              {
                  id:'0002',
                  imgurl:require("../../../assets/images/entrances_05.png"),
                  desc:"出境游"
              },
              {
                  id:'0003',
                  imgurl:require("../../../assets/images/entrances_08.png"),
                  desc:"一日游"
              },
              {
                  id:'0004',
                  imgurl:require("../../../assets/images/entrances_10.png"),
                  desc:"美食林"
              },
              {
                  id:'0005',
                  imgurl:require("../../../assets/images/entrances_16.png"),
                  desc:"汽车票"
              },
              {
                  id:'0006',
                  imgurl:require("../../../assets/images/entrances_18.png"),
                  desc:"国内游"
              },
              {
                  id:'0007',
                  imgurl:require("../../../assets/images/entrances_19.png"),
                  desc:"超级巴士"
              },
              {
                  id:'0008',
                  imgurl:require("../../../assets/images/entrances_20.png"),
                  desc:"攻略"
              },
              {
                  id:'0001',
                  imgurl:require("../../../assets/images/entrances_03.png"),
                  desc:"签证"
              },
              {
                  id:'0002',
                  imgurl:require("../../../assets/images/entrances_05.png"),
                  desc:"出境游"
              },
              {
                  id:'0003',
                  imgurl:require("../../../assets/images/entrances_08.png"),
                  desc:"一日游"
              }
          ]
      }
  },
  computed:{
      pages(){
          var page = [];
          this.iconList.forEach((item,index)=>{
              var num = Math.floor(index / 8);
              if(!page[num]){
                  page[num] = [];
              }
              page[num].push(item)
          })
        return page;
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';


.icons >>> .swiper-container
    height: 0;
    padding-bottom: 50%;
.icon 
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;

    .icon-img 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;

        .icon-img-content 
            display: block;
            margin: 0 auto;
            height: 100%;
    
    .icon-desc 
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: $darkTextColor;
        text-align: center;
        ellipsis()
</style>

