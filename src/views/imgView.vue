<template>
  <imgPage />
  <div style="width: 200px">
    <p>全域圖片loadimg 狀態</p>
    <img v-lazy="imgA" style="width: 200px" />
    <img v-lazy="imgB" style="width: 200px" />
  </div>
</template>

<script>
import imgPage from "../components/imgPage.vue";
import imgA from "@/assets/布列手做坊.jpg";
export default {
  name: "imgView",
  components: {
    imgPage,
  },
  setup() {
    return { imgA };
  },
};
</script>

<style></style>
