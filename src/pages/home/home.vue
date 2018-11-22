<template>
    <div>
        <home-header></home-header>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
    </div>
</template>
<script>
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/swiper.vue"
import HomeIcons from "./components/icons.vue"


    export default{
        name:'Home',
        components:{
                HomeHeader,
                HomeSwiper,
                HomeIcons
            }
    }
</script>
<style>

</style>


