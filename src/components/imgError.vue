<template>
  <!-- <img :src="text" alt="" style="width: 40%" @error="imgError" /> -->
  <!-- 參考網址 -->
  <!-- https://over.wiki/ask/how-to-treat-image-error-404-on-vuejs/ -->
  <img :src="'http://www.naoexiste.com'" @error="errorImage" alt="" />
  <img
    :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png'"
    @error="errorImage"
    alt=""
  />
  <p>404 圖</p>
  <img
    v-if="open"
    :src="'http://www.naoexiste.com'"
    @error="errorImage"
    alt=""
  />
  <p>有效截圖</p>
  <img
    :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png'"
    @error="errorImage"
    alt=""
  />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const img = ref(
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    );
    function errorImage(event) {
      event.target.src = img.value;
      //   console.clear();
      // 關於控制台中的錯誤是默認瀏覽器行為，所以你唯一能做的就是清理console.clear();
    }

    const open = ref(true);
    function checkImgExists(imgurl) {
      return new Promise(function (resolve, reject) {
        var ImgObj = new Image();
        ImgObj.src = imgurl;
        ImgObj.onload = function (res) {
          resolve(res);
        };
        ImgObj.onerror = function (err) {
          reject(err);
        };
      });
    }

    checkImgExists("http://www.naoexiste.com")
      .then(() => {
        //success callback
        open.value = true;
        console.log("有效链接");
      })
      .catch(() => {
        //fail callback
        open.value = false;
        console.log("无效链接");
        console.clear();
      });

    return {
      img,
      errorImage,
      open,
    };
  },
};
</script>

<style></style>
