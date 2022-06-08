<template>
  <div class="pagination">
    <ul>
      <li @click="go_up(page_num)">Prev</li>
      <li
        v-for="(item, index) in plusOne"
        :key="index"
        @click="go_up(item)"
        :class="{ actived: item == page_num }"
      >
        {{ item }}
      </li>
      <li @click="go_up(page_num)">Next</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const page_num = ref("1");
    const total = ref("16"); // 總數
    const num = ref("10"); // 分頁數量

    function go_up(item) {
      //   console.log(1, item);
      page_num.value = item;
      if (Number(page_num.value) <= 1) {
        page_num.value = Number(page_num.value) + 1;
        // console.log(111, page_num.value);
      } else {
        page_num.value = Number(page_num.value) - 1;
        // console.log(334534, page_num.value);
      }
    }

    const plusOne = computed(() => {
      const aa = []; // 運算
      const bb = []; // 運算
      for (let i = 0; i < total.value; i++) {
        aa.push(i + 1);
      }
      if (Number(page_num.value) + 9 < Number(total.value)) {
        // console.log(100);

        // console.log(
        //   "qq",
        //   aa.slice(
        //     Number(page_num.value) - 1,
        //     Number(page_num.value) + (Number(num.value) - 1)
        //   )
        // );
        bb.push(
          ...aa.slice(
            Number(page_num.value) - 1,
            Number(page_num.value) + (Number(num.value) - 1)
          )
        );
      } else {
        // console.log(2);
        // console.log(
        //   "s",
        //   aa.slice(Number(total.value) - Number(num.value), Number(total.value))
        // );
        bb.push(
          ...aa.slice(
            Number(total.value) - Number(num.value),
            Number(total.value)
          )
        );
      }
      //   console.log("aa", bb);
      return bb;
    });
    return { total, num, plusOne, go_up, page_num };
  },
};
</script>

<style>
.actived {
  background: rgb(179, 94, 94);
}
</style>
