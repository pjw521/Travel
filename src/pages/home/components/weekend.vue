import { defaults, info } from 'autoprefixer';
<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img  class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'Recommend',
        data(){
            return{
                recommendList:[
                    {
                        id:"00001",
                        imgUrl:'https://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg',
                        title:"大连圣亚海洋世界",
                        desc:"浪漫大连首站，浪漫的海洋主题公园"
                    },
                    {
                        id:"00002",
                        imgUrl:'https://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg',
                        title:"大连圣亚海洋世界",
                        desc:"浪漫大连首站，浪漫的海洋主题公园"
                    },
                    {
                        id:"00003",
                        imgUrl:'https://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg',
                        title:"大连圣亚海洋世界",
                        desc:"浪漫大连首站，浪漫的海洋主题公园"
                    },
                ]
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "~@styles/mixins.styl"
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 25.59%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height 0.54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()

</style>

