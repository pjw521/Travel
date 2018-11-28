<template>
    <div>
        <div class="banner" @click="showGallary=true">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number" >
                    <i class="iconfont banner-icon">&#xe616;</i>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <CommonGallary :imgs="gallaryImgs" v-show="showGallary" @change="change"></CommonGallary>
    </div>
</template>
<script>
import CommonGallary from "@common/gallary/gallary"

    export default{
        name:"DetailBanner",
        props:["sightName","bannerImg","gallaryImgs"],
        data(){
            return{
                showGallary:false
            }
        },
        methods:{
            change(){
                this.showGallary = false;
            }
        },
        components:{
            CommonGallary
        }
    }
</script>
<style lang="stylus" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 928739 */
  src: url('//at.alicdn.com/t/font_928739_anof4qqt6yc.eot');
  src: url('//at.alicdn.com/t/font_928739_anof4qqt6yc.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_928739_anof4qqt6yc.woff') format('woff'),
  url('//at.alicdn.com/t/font_928739_anof4qqt6yc.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_928739_anof4qqt6yc.svg#iconfont') format('svg');
}
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0,),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height 0.32rem
                line-height .32rem
                margin-top .2rem
                padding 0 .4rem
                border-radius .2rem
                background rgba(0,0,0,0.8)
                font-size .24rem
                .banner-icon 
                 font-size .24rem
</style>
