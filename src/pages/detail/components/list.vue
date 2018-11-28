<template>
    <div>
        <ul>
            <li 
                v-for="(item,index) in list" 
                :key="index"
            >
                {{item.title}}
                <ul v-if="item.children">
                    <DetailList :list="item.children" class="children"></DetailList>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"DetailList",
        props:{
            list:Array
        }
    }
</script>
<style lang="stylus" scoped>
    .children{
        padding 0 .2rem
    }
</style>
