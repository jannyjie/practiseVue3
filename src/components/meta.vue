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
            "https://jannyjie.github.io/practiseVue3/dist/img/1280x680.jpg",
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
