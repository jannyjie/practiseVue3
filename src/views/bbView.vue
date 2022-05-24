<template>
    <router-link to="/about">about</router-link>
    <TodoItem />
</template>

<script>
// import { ref } from 'vue'
import TodoItem from "@/components/TodoItem.vue";
export default {
    components: {
        TodoItem
    },
    setup(){

        return{
        
        }
    }
}
</script>

<style>

</style>