<template>
  <Head>
    <!-- <title>Hello World</title> -->
    <!-- <base href="/base" />
    <html lang="en-US" class="theme-dark" />
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
      meta: [
        {
          property: "og:image",
          image:
            "https://event.1111.com.tw/event22/2022membercard/assets/img/og.jpg",
        },
        {
          property: "twitter:title",
          image: "驗證中心|1111人力銀行",
        },
      ],
      htmlAttrs: { class: "first-class" },
    });
    return { Head };
  },
};
</script>

<style></style>
