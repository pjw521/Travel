<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currenCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button"  @click="handleClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div @click="handleClick(it.name)" class="item border-bottom" v-for="it of item" :key="it.id">{{it.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BS from "better-scroll";
import {mapState} from "vuex"
import {mapMutations} from "vuex"

    export default{
        name:"cityList",
        props:{
            cities:Object,
            hotCities:Array,
            letter:String
        },
        methods:{
            handleClick(city){
                this.changeCity(city);
                this.$router.push("/")
            },
            ...mapMutations(['changeCity'])
        },
        computed:{
            ...mapState({
                currenCity:'city'
            })
        },
        mounted () {
            this.scroll = new BS(this.$refs.wrapper);
        },
        watch:{
            letter(){
                let el = this.$refs[this.letter][0];
                this.scroll.scrollToElement(el);
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl"
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        user-select none
        .title
            height 0.54rem
            line-height 0.44rem
            background #eee
            padding-left #666
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin 0.1rem
                    padding .1rem 0 
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
