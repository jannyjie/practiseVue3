<script>
import { ref } from "vue";
import { useFileUpdate } from "@/composition-api/useFileUpdate";
export default {
  setup() {
    const { setFile, previewMap } = useFileUpdate();

    // input DOM
    const inputDOM = ref(null);

    const fileChange = (e) => {
      console.log(e.target.files);
      setFile(e.target.files);
    };

    const uploadImages = () => {
      inputDOM.value.click();
    };

    return {
      inputDOM,
      fileChange,
      uploadImages,
      previewMap,
    };
  },
};
</script>

<template>
  <div>
    <input
      ref="inputDOM"
      type="file"
      class="upload"
      name="imgUpload"
      multiple="multiple"
      @change="fileChange"
    />
    <button @click="uploadImages">上傳照片</button>
  </div>
  <div class="qq">
    <div
      v-show="Object.values(previewMap).length !== 0"
      class="img_box"
      v-for="item in previewMap"
      :key="item"
    >
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<style>
.upload {
  position: fixed;
  top: -500px;
  left: -500;
  z-index: -100;
  opacity: 0;
}
button {
  width: 300px;
  height: 60px;
  font-size: 30px;
}
.img_box {
  width: 300px;
  height: 300px;
  float: left;
  background-color: #000;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.qq {
  width: 100%;
  display: flex;
  background: #cfcfcf;
}
</style>
