<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default{
        name:'HomeSwiper',
        data:function(){
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:'//img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg'
                    },
                    {
                        id:'0002',
                        imgUrl:'//img1.qunarzz.com/qs/1811/c0/6257518b78a73602.jpg'
                    }
                ]
            }
        }
    }
</script>   
<style lang="stylus" scoped>
    .wrapper
        margin-top .1rem
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff 
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 25.6%
        background #eee
        .swiper-img
            width 100%
</style>
 