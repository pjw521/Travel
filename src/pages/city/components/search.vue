<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" v-model="keyword"  placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="result" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item">{{item}}</li>
                <li class="search-item border-bottom" v-show="show">暂无匹配城市</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import BS from "better-scroll";
    export default{
        name:"citySearch",
        props:{
            cities:Object
        },
        data(){
            return{
                keyword:'',
                list:[],
                timer:null
            }
        },
        mounted(){
            new BS(this.$refs.result);
        },
        computed:{
            show(){
                if(this.list.length){
                    return false;
                }
                return true;
            }
        }
        ,
        watch:{
            keyword(newVal){
                if(newVal === ""){
                    this.list = [];
                    return
                }
                if(this.timer){
                    clearTimeout(this.timer);
                }
                let This = this;
                let result = []
                this.timer = setTimeout(function(){
                    for(let item in This.cities){
                        This.cities[item].forEach(it=>{
                            if(it.name.indexOf(This.keyword) > -1 || it.spell.indexOf(This.keyword) > -1){
                                result.push(it.name);
                            }
                        })
                    }
                },16)
                this.list = result;
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl"
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height 0.62rem
            padding 0 .1rem
            text-align center
            border-radius .1rem
            color #666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height 0.62rem
            padding-left 0.2rem
            color #666
            background #fff
</style>
