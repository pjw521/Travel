<template>
    <div>
        <home-header></home-header>
        <HomeSwiper></HomeSwiper>
    </div>
</template>
<script>
import HomeHeader from "./components/header.vue"
import HomeSwiper from "./components/swiper.vue"

    export default{
        name:'Home',
        components:{
                HomeHeader,
                HomeSwiper
            }
    }
</script>
<style>

</style>


