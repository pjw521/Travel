<template>
    <div>
        <home-header></home-header>
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
                    iconList:[],
                    recommendList:[],
                    swiperList:[],
                    weekendList:[],
                    lastCity:[]
                }
            },
        methods:{
            getHomeInfo(){
                axios.get("/api/index.json?city=" + this.$store.state.city)
                .then(this.getHomeinfoSucc)
            },
            getHomeinfoSucc(res){
                let result = res.data;
                if(result.ret){
                    let data = result.data;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.swiperList = data.swiperList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        mounted(){
            this.getHomeInfo();
            this.lastCity = this.$store.state.city;
        },
        activated(){
            if(this.lastCity !== this.$store.state.city){
                this.getHomeInfo();
                this.lastCity = this.$store.state.city
            }
        }
    }
</script>
<style>

</style>


