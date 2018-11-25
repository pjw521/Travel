<template>
    <div>
        <city-header></city-header>
        <citySearch :cities="cities"></citySearch>
        <cityList :cities="cities" :hotCities="hotCities" :letter="letter"></cityList>
        <cityAlphabet :cities="cities" @changeLetter="handleLetter" ></cityAlphabet>
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
        data(){
            return{
                letter:''
            }
        },
        components:{
            cityHeader,
            citySearch,
            cityList,
            cityAlphabet
        },
        data(){
            return{
                cities:{},
                hotCities:[],
                letter:""
            }
        },
        methods:{
            handleRes(res){
                if(res.data.ret){
                    let data = res.data.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            },
            handleLetter(letter){
                this.letter = letter;
            }
        },
        mounted(){
            axios.get("/api/city.json")
                .then(this.handleRes)
        }
    }
</script>
