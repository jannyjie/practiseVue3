<template>ss</template>
<script>
import { useHead } from "@vueuse/head";
// import { ref } from "vue";
export default {
  name: "metaPage",
  setup() {
    // 目前useHead 還在開發中雖然可以在DOM 出現但BOM 尚未倒置爬蟲尚無法抓取資訊
    useHead({
      title: "12",
      meta: [
        {
          name: "title",
          content: "12",
        },
        {
          name: "Description",
          content:
            "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
        },
        {
          name: "keywords",
          content: "keywords",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "zh_TW",
        },
        {
          property: "og:title",
          content: "驗證中心|1111人力銀行",
        },
        {
          property: "og:url",
          content: "https://jannyjie.github.io/practiseVue3/dist/index.html",
        },
        {
          property: "og:image",
          content:
            "https://event.1111.com.tw/event22/admission_reserve/assets/img/backgrounds/1.jpg",
        },
        {
          property: "og:description",
          content:
            "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
        },
        {
          name: "twitter:title",
          content: "驗證中心|1111人力銀行",
        },
        {
          name: "twitter:description",
          content:
            "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
        },
        {
          name: "twitter:keywords",
          content: "驗證、快速通關、會員卡",
        },
        {
          name: "google",
          content: "notranslate",
        },
        {
          name: "robots",
          content: "max-image-preview:large, max-video-preview:-1",
        },
        {
          "http-equiv": "Content-Language",
          content: "zh-Hant",
        },
      ],
      htmlAttrs: {
        lang: "zh-Hant-TW",
        class: "first-class",
      },
    });
    return {};
  },
};
</script>

<style></style>
