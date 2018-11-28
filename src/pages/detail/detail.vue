<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <DetailHeader></DetailHeader>
        <div class="height">
            <DetailList :list="list"></DetailList>
        </div>
    </div>
</template>
<script>
    import DetailBanner from "./components/banner.vue"
    import DetailHeader from "./components/header.vue"
    import DetailList from "./components/list.vue"
    import axios from "axios"
    export default{
        name:"Detail",
        data(){
            return{
                list:[],
                sightName:'',
                bannerImg:'',
                gallaryImgs:[]
            }
        },
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        methods:{
            getData(){
                axios.get("/api/detail.json",{
                    params:{
                        id:this.$route.params.id
                    }
                })
                .then(res=>{
                   let data = res.data.data;
                   this.list = data.categoryList;
                   this.sightName = data.sightName;
                   this.bannerImg = data.bannerImg;
                   this.gallaryImgs = data.gallaryImgs
                })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>
<style lang="stylus" scoped>
    .height
        height 20rem
    
</style>
