<template>
    <div>
        <home-header :city="city"></home-header>
        <HomeSwiper :swiperList="swiperList"></HomeSwiper>
        <HomeIcons :iconList="iconList"></HomeIcons>
        <HomeRecommend :recommendList="recommendList"></HomeRecommend>
        <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    </div>
</template>
<script>
import axios from "axios"
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/swiper.vue"
import HomeIcons from "./components/icons.vue"
import HomeRecommend from "./components/recommend.vue"
import HomeWeekend from "./components/weekend.vue"




    export default{
        name:'Home',
        components:{
                HomeHeader,
                HomeSwiper,
                HomeIcons,
                HomeRecommend,
                HomeWeekend
            },
            data(){
                return{
                    city:'',
                    iconList:[],
                    recommendList:[],
                    swiperList:[],
                    weekendList:[]
                }
            },
        methods:{
            getHomeInfo(){
                axios.get("/api/index.json")
                .then(this.getHomeinfoSucc)
            },
            getHomeinfoSucc(res){
                let result = res.data;
                if(result.ret){
                    let data = result.data;
                    this.city = data.city;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.swiperList = data.swiperList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        mounted(){
            this.getHomeInfo();
        }
    }
</script>
<style>

</style>


