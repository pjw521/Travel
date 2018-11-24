<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @click="click"
            @touchstart='touchStart'
            @touchmove="touchMove"
            @touchend="touchEnd"
            >{{item}}
        </li>
    </ul>
</template>
<script>
    export default{
        name:"cityAlphabet",
        props:{
            cities:Object
        },
        data(){
            return{
                status:false,
                startY:"",
                timer:null
            }
        },
        computed:{
            letters(){
                let letters = [];
                for(let i in this.cities){
                    letters.push(i)
                } 
                return letters 
            }
        },
        updated(){
            this.startY =  this.$refs['A'][0].offsetTop;
        },
        methods:{
            click(e){
                this.$emit('changeLetter',e.target.innerText);
            },
            touchStart(){
                this.touchStatus = true;
            },
            touchMove(e){
                if(this.touchStatus){
                    if(this.timer){
                        clearTimeout(this.timer);
                    }
                    var _this = this;
                    this.timer = setTimeout(function(){
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - _this.startY) / 22);
                        if(index >= 0 && index < _this.letters.length){
                            _this.$emit('changeLetter',_this.letters[index])
                        }
                    },16)
                }
            },
            touchEnd(){
                this.touchStatus = false;
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import "~@styles/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.85rem
        right 0
        bottom 0
        width 0.4rem
        .item   
            line-height .44rem
            text-align center
            color $bgColor
    
</style>
