<template>
    <div>
        <city-header></city-header>
        <citySearch></citySearch>
        <cityList :cities="cities" :hotCities="hotCities"></cityList>
        <cityAlphabet :cities="cities" ></cityAlphabet>
    </div>
</template>
<script>
import axios from "axios"
import cityHeader from "./components/header.vue"
import citySearch from "./components/search.vue"
import cityList from "./components/list.vue"
import cityAlphabet from "./components/alphabet.vue"

    export default{
        name:"city",
        components:{
            cityHeader,
            citySearch,
            cityList,
            cityAlphabet
        },
        data(){
            return{
                cities:{},
                hotCities:[]
            }
        },
        methods:{
            handleRes(res){
                if(res.data.ret){
                    let data = res.data.data;
                    console.log(data);
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            }
        },
        mounted(){
            axios.get("/api/city.json")
                .then(this.handleRes)
        }
    }
</script>
