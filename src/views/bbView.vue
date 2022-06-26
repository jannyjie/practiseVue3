<template>
  <router-link to="/about">about</router-link>
  <TodoItem /> {{ width }} {{ showWidth }}
  <forAPIPost />
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import { userRwdFn } from "../composition-api/index";
import forAPIPost from "@/components/forAPIPost.vue";
export default {
  components: {
    TodoItem,
    forAPIPost,
  },
  setup() {
    window.name = "bb";
    console.log("BB", window.performance.navigation.type);
    const { width, showWidth } = userRwdFn();
    return {
      width,
      showWidth,
    };
  },
};
</script>

<style></style>
