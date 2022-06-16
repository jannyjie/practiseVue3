<template>
  <div class="search">
    <input v-model="text" type="text" />
    <button @click="handleSearch">search</button>
  </div>
</template>
<script>
import { computed } from "vue";

export default {
  name: "SearchPage",
  props: {
    inputText: {
      type: String,
      default: "",
    },
  },
  emits: ["update:inputText", "search"],
  setup(props, { emit }) {
    const text = computed({
      get: () => props.inputText,
      set: (val) => emit("update:inputText", val),
    });
    const handleSearch = () => {
      emit("search");
    };
    return {
      handleSearch,
      text,
    };
  },
};
</script>
<!-- props：props的名稱就是我們在首頁v-model:inputText，那個冒號後面的名稱。

emits：只要你有使用他的emit功能，就要把emit的名字填進去。

setup：這是vue3改最多的地方，在這邊要先呼叫computed，因為我們在組件內也想用v-model（XD），預設值的get就抓props傳進來的，set當然就是用emit拉～ 最後setup就是規定要return一個「物件」，記住是回傳物件啊～我當初就是整個回傳我的參數，然後找半天找不到錯在哪（汗 -->
