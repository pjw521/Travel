<template>
    <div>
        <detail-banner></detail-banner>
        <DetailHeader></DetailHeader>
        <div class="height"></div>
    </div>
</template>
<script>
    import DetailBanner from "./components/banner.vue"
    import DetailHeader from "./components/header.vue"
    export default{
        name:"Detail",
        components:{
            DetailBanner,
            DetailHeader
        }
    }
</script>
<style lang="stylus" scoped>
    .height
        height 20rem
    
</style>
