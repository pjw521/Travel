<template>
    <div>
        <city-header></city-header>
        <citySearch></citySearch>
        <cityList></cityList>
        <cityAlphabet></cityAlphabet>
    </div>
</template>
<script>
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
        }
    }
</script>
<style lang-"stylus" scoped>

</style>
