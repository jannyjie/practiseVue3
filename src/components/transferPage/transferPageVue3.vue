<template>
  <div id="container">
    <h3>子組件</h3>
    <div>子組件內容{{ mon }}</div>
    <button @click="changeMoney">按鈕</button>
  </div>
</template>

<script>
export default {
  name: "transferPageVue3",
  props: {
    mon: {
      type: Number,
      default: 0,
    },
  },
  /**
   * props 父組件數據
   * emit 觸發自訂一事件
   */
  setup(props, { emit }) {
    // 獲取父組件的數據
    console.log(props.mon);
    const changeMoney = () => {
      emit("change-money", 1);
    };

    return {
      changeMoney,
    };
  },
};
</script>

<style></style>
