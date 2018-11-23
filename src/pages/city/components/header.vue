<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left"><i class="iconfont back">&#xe624;</i></div>
        </router-link>
        城市选择
    </div>
</template>
<script>
    export default{
        name:"cityHeader"
    }
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl"
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        .back
            position absolute
            top 0
            left 0
            width 0.64rem
            text-align center
            font-size .4rem
            color #fff
</style>
