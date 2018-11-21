import '../../../assets/styles/border.css';
<template>
    <div class="header">
        <div class="header-left"><i class="iconfont back-icon">&#xe624;</i></div>
        <div class="header-input"><i class="iconfont">&#xe632;</i>内容</div>
        <div class="header-right">城市<i class="iconfont arrow-icon">&#xe64a;</i></div>
    </div>
</template>
<script>
    export default{
        name:'HomeHeader'
    }
</script>
<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
    .header
        display flex
        height 0.86rem
        line-height .86rem;
        background $bgColor
        color #fff
        .header-left
            width 0.64rem
            float left
            .back-icon
                display block
                text-align center
                font-size .4rem
                width 100%
        .header-input
            flex 1
            background #fff
            border-radius 0.1rem
            color #ccc
            height 0.64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
        .header-right
            width 1.24rem
            float right
            text-align center
            .arrow-icon
                font-size .24rem
</style>


