<template>
    <div class="container" @click="click">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item,index) in imgs"
                    :key="index"
                >
                    <img :src="item" class="gallary-img" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default{
        name:"CommenGalary",
        props:{
            imgs:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            click(){
                this.$emit("change")
            }
        },
        data(){
            return{
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    background #000
    .wrapper
        height 0
        width 100%
        padding-bottom 100%
        .gallary-img
            width 100%
        .swiper-pagination
            color #fff;
            bottom -1rem
</style>
