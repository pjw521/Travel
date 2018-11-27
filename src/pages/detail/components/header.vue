<template>
    <div>
        <div class="header-tbs" v-show="show">
            <i class="iconfont header-abs-back">&#xe624;</i>
        </div>
        <div class="header-fixed" v-show="!show" :style="style">
            <router-link to="/">
                <div class="header-left"><i class="iconfont header-fixed-back">&#xe624;</i></div>
            </router-link>
            城市选择
        </div>
    </div>
</template>
<script>
    export default{
        name:"DetailHeader",
        data(){
            return{
                show:true,
                style:{
                    opacity:0
                }
            }
        },
        methods:{
            showHeader(){
                let top = document.documentElement.scrollTop;
                if(top > 60){   
                    this.show = false;
                    let opacity = (top / 160).toFixed(1); 
                    opacity = opacity > 1 ? 1:(top / 160).toFixed(1)
                    this.style = { opacity }
                }else{
                    this.show = true;
                }
            }
        },
        mounted(){
            window.addEventListener("scroll",this.showHeader)
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.showHeader)
        }

    }
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl"
    .header-tbs
        position absolute
        left 0.2rem
        top 0.2rem
        width 0.8rem
        height 0.8rem
        line-height  .8rem
        border-radius .4rem
        text-align center
        background rgba(0,0,0,0.8)
        .header-abs-back
            color #ffffff
            font-size .4rem
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        .header-fixed-back
            display  inline-block
            position absolute
            top 0
            left 0
            width 0.64rem
            text-align center
            font-size .4rem
            color #fff
</style>
