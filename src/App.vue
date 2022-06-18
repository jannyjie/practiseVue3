<!-- App.vue -->
<template>
  <!-- <metaPage /> -->
  <div id="app" class="app-containt">
    <NavBar />
    <!-- <router-view v-if="isRouterAlive"></router-view> -->
    <router-view class="router-containt" v-if="isRouterAlive"></router-view>
  </div>

  <!-- 在router-view使用isRouterAlive或者是下面这种在组件中使用 -->
  <!-- <BLank v-if="isRouterAlive"></BLank> -->
  <a :href="featuredLink" target="_blank" rel="noopener noreferrer"></a>
  <p v-font-size:small>small</p>
  <p v-font-size:medium>medium</p>
  <p v-font-size:large>large</p>
  <allPlugin>
    <template #title> I am Jenny </template>
    <template #author> I am Jenny </template>
  </allPlugin>
  <button @click="logout">logout</button>
</template>

<script>
import { ref, nextTick, provide, inject } from "vue";
import NavBar from "@/components/NavBar";
// import metaPage from "@/components/meta.vue";
export default {
  name: "App",
  components: {
    NavBar,
    // metaPage,
  },
  setup() {
    // 局部组件刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      console.log(isRouterAlive.value);
      isRouterAlive.value = false;
      console.log(2);
      nextTick(() => {
        // console.log(1);
        isRouterAlive.value = true;
        // location.reload();
        // console.log(isRouterAlive.value);
      });
    };
    provide("reload", reload);

    const logout = inject("logout");

    return {
      isRouterAlive,
      logout,
    };
  },
};
</script>
<style lang="scss">
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "~bootstrap";
</style>
