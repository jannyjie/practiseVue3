<template>
  <Head>
    <meta
      v-for="tag in metaList"
      :key="tag.name"
      :name="tag.name"
      :content="tag.content"
    />
    <meta name="twitter:title" content="驗證中心|1111人力銀行" />
  </Head>
</template>
<script>
import { Head, useHead } from "@vueuse/head";
// import { ref } from "vue";
export default {
  name: "metaPage",
  setup() {
    // const aa = ref("123");
    useHead({
      title: "12",
      meta: [
        {
          property: "og:locale:alternate",
          content: "zh",
          key: "zh",
        },
        {
          property: "og:locale:alternate",
          content: "en",
          key: "en",
        },
      ],
      htmlAttrs: { class: "first-class" },
    });
    return { Head };
  },
};
</script>

<style></style>
