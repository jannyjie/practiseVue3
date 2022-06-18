<template>
  <Head>
    <!-- <title>Hello World</title> -->
    <!-- <base href="/base" />
    <html lang="en-US" class="theme-dark" />


    <head>


    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>驗證中心|1111人力銀行</title>
    <meta name="title" content="驗證中心|1111人力銀行" />
    <meta name="keywords" content="驗證、快速通關、會員卡" />
    <meta
      name="Description"
      content="快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分"
    />
    <meta
      name="company"
      content="1111人力銀行 | 全球華人股份有限公司 | www.1111.com.tw"
    />
    <meta
      name="copyright"
      content="1111人力銀行 | 全球華人股份有限公司版權所有© 1111 Job Bank All Rights Reserved."
    />
    <meta name="author" content="1111人力銀行 | 全球華人股份有限公司" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="zh_TW" />
    <meta
      property="og:url"
      content="https://event.1111.com.tw/event22/2022membercard/index.asp"
    />
    <meta property="og:site_name" content="驗證中心|1111人力銀行" />
    <meta property="og:title" content="驗證中心|1111人力銀行" />
    <meta
      property="og:image"
      content="https://event.1111.com.tw/event22/2022membercard/assets/img/og.jpg"
    />
    <meta
      property="og:description"
      content="快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分"
    />
    <meta name="twitter:title" content="驗證中心|1111人力銀行" />
    <meta
      name="twitter:description"
      content="快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分"
    />
    <meta name="twitter:keywords" content="驗證、快速通關、會員卡" />
    <meta name="google" content="notranslate" />
    <meta
      name="robots"
      content="max-image-preview:large, max-video-preview:-1"
    />
    <meta http-equiv="Content-Language" content="zh-Hant" />

    <meta name="twitter:title" content="驗證中心|1111人力銀行" /> -->
  </Head>
</template>
<script>
import { Head, useHead } from "@vueuse/head";
// import { ref } from "vue";
export default {
  name: "metaPage",
  setup() {
    useHead({
      title: "12",
      Description:
        "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
      keywords: "keywords",
      meta: [
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "zh_TW",
        },
        {
          property: "og:locale",
          content: "https://jannyjie.github.io/practiseVue3/dist/index.html",
        },
        {
          property: "og:image",
          content:
            "https://jannyjie.github.io/practiseVue3/dist/assets/img/1280x680.jpg",
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
    return { Head };
  },
};
</script>

<style></style>
