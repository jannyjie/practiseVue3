<!-- test.vue -->
<template>
  <router-link to="/bb">bb</router-link>
  <div>
    <!-- input框输入值，点击按钮，看值会不会清空 -->
    <!-- <input type="text">  -->
  </div>
  <button @click="getGoodsList">测试按钮</button>
  <TodoItem />
</template>
<script>
import { inject, onMounted, ref} from "vue";
import TodoItem from "@/components/TodoItem.vue";
import { useFetchApi } from '../composition-api/useFetch'
export default{
  components: {
        TodoItem
  },
  setup() {
    const button = inject("reload");
    onMounted(() => {
      // window.addEventListener('load', button)
      window.addEventListener('readystatechange', button)
    })

    const goodsList = ref();
    const getGoodsList = async () => {
      goodsList.value = await useFetchApi()
    }

    console.log('user', goodsList);
    
    return {button, goodsList, getGoodsList};
  },
};
</script>
