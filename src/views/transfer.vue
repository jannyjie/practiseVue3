<template>
  <h1>父組件</h1>
  <div>{{ money }}</div>
  <transferPageVue3 :mon="money" @change-money="unpdateMoney" />
  <transferPageEmits @click="onClick" @open="onOpen" />
  <section class="home">
    <h1>search a song or a singer</h1>
    <transferPageModel v-model:inputText="searchText" @search="handleSearch" />
    {{ searchText }}
  </section>
</template>

<script>
import transferPageVue3 from "@/components/transferPage/transferPageVue3.vue";
import transferPageEmits from "@/components/transferPage/transferPageEmits.vue";
import transferPageModel from "@/components/transferPage/transferPageModel.vue";
import { ref } from "vue";
export default {
  name: "transferPage",
  components: {
    transferPageVue3,
    transferPageEmits,
    transferPageModel,
  },
  setup() {
    const money = ref(0);
    const unpdateMoney = (newMoney) => {
      money.value = money.value + newMoney;
    };
    const onClick = () => {
      console.log("click me!");
    };
    const onOpen = () => {
      console.log("open me!");
    };

    const searchText = ref("");

    const handleSearch = () => {
      console.log(searchText.value);
    };
    return {
      handleSearch,
      searchText,
      onClick,
      onOpen,
      money,
      unpdateMoney,
    };
  },
};
</script>

<style></style>
