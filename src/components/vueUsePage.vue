<template>
  <div class="box">
    <div>
      <p>視窗X/Y 軸</p>
      {{ x }} {{ y }}
    </div>
    <div>
      <p>圖片載入狀態</p>
      <span v-if="isLoading">Loading</span>
      <span v-else-if="error">error</span>
      <img v-else :src="avatarUrl" style="width: 200px" />
    </div>
    <div>
      <p>使用斷點</p>
      {{ lg }} {{ md }}
      <p v-if="breakpoints.xl">PC 尺寸</p>
      <p v-if="breakpoints.md">ipad 尺寸</p>
      <p v-if="breakpoints.m">iphone 尺寸</p>
      <!-- <p v-if="xxxl">xxxl 尺寸</p> -->
      <!-- <p v-if="xxl">xxl尺寸</p> -->
      <!-- <p v-if="xl">xl 尺寸</p> -->
      <p v-if="lg">PC 尺寸</p>
      <p v-if="md">ipad 尺寸</p>
      <p v-if="sm">iphone 尺寸</p>
    </div>
    <div>
      <p>使用瀏覽器位置</p>
      <ul>
        <li>location.hash : {{ location.hash }}</li>
        <li>location.host : {{ location.host }}</li>
        <li>location.hostname : {{ location.hostname }}</li>
        <li>location.state : {{ location.state.current }}</li>
      </ul>
    </div>
    <div>
      <p>使用窗口大小</p>
      {{ width }} {{ height }}
    </div>
    <div>
      <note>Add to 7 to show the alert.</note>
      <p>Count: {{ count }}</p>
      <button @click="inc()">Increment</button>
      <button @click="dec()">Decrement</button>
    </div>
    <div>
      <p>使用顏色模式</p>
      <button @click="next()">
        <i
          v-if="mode === 'dark'"
          i-carbon-moon
          inline-block
          align-middle
          class="align-middle"
        />
        <i
          v-if="mode === 'light'"
          i-carbon-sun
          inline-block
          align-middle
          class="align-middle"
        />
        <i
          v-if="mode === 'cafe'"
          i-carbon-cafe
          inline-block
          align-middle
          class="align-middle"
        />
        <i
          v-if="mode === 'contrast'"
          i-carbon-contrast
          inline-block
          align-middle
          class="align-middle"
        />

        <span class="ml-2 capitalize">{{ mode }}</span>
      </button>

      <span class="p-4 opacity-50">← Click to change the color mode</span>
    </div>
    <div>
      <p>使用地理位置</p>
      locatedAt : {{ locatedAt }}
      <!-- <p v-if="item in cloned_array">{{ item.latitude }}</p> -->
      <!-- <pre lang="json">{{
        JSON.stringify(
          {
            coords: {
              accuracy: coords.accuracy,
              latitude: coords.latitude,
              longitude: coords.longitude,
              altitude: coords.altitude,
              altitudeAccuracy: coords.altitudeAccuracy,
              heading: coords.heading,
              speed: coords.speed,
            },
            locatedAt,
            error: error ? error.message : error,
          },
          null,
          2
        )
      }}</pre> -->
    </div>
    <div>
      <p>無限滾動</p>
      <div
        ref="el"
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto overflow-y-scroll bg-gray-500/5 rounded"
      >
        <div
          v-for="item in data"
          :key="item"
          class="h-30 bg-gray-500/5 rounded p-3"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div>
      <p>使用WindowScroll</p>
      <p>{{ Scroll }}</p>
      <p>X : {{ ScrollX }}</p>
      <p>Y : {{ ScrollY }}</p>
    </div>
  </div>
</template>

<script>
import {
  useMouse,
  useImage,
  useBreakpoints,
  breakpointsTailwind,
  useBrowserLocation,
  useWindowSize,
  until,
  invoke,
  useCounter,
  useColorMode,
  useCycleList,
  useGeolocation,
  useInfiniteScroll,
  useWindowScroll,
} from "@vueuse/core";
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    // "x" and "y" are refs
    const { x, y } = useMouse();
    // 圖片載入狀態
    const avatarUrl =
      "https://event.1111.com.tw/event22/2022membercard/assets/img/og.jpg";
    const { isLoading, error } = useImage({ src: avatarUrl });
    // 使用斷點
    const breakpoints = useBreakpoints({
      pc: 2000,
      md: 1024,
      m: 640,
    });
    console.log(breakpoints);
    const breakpoint = useBreakpoints(breakpointsTailwind);
    const sm = breakpoint.smaller("sm");
    const md = breakpoint.between("sm", "md");
    const lg = breakpoint.between("md", "lg");
    // const xl = breakpoints.between("lg", "xl");
    // const xxl = breakpoints.between("xl", "2xl");
    // const xxxl = breakpoints["2xl"];

    // 使用瀏覽器位置
    const location = useBrowserLocation();

    // 使用窗口大小
    const { width, height } = useWindowSize();

    // 加減
    const { count, inc, dec } = useCounter();
    invoke(async () => {
      await until(count).toBe(7);
      alert("You got 7!");
    });

    // 使用顏色模式
    const mode = useColorMode({
      modes: {
        contrast: "contrast",
        cafe: "cafe",
      },
    });

    const { next } = useCycleList(["dark", "light", "cafe", "contrast"], {
      initialValue: mode,
    });

    //使用地理位置
    const { coords, locatedAt } = useGeolocation();

    // 無限滾動
    const el = ref(null);
    const data = ref([1, 2, 3, 4, 5, 6]);
    useInfiniteScroll(
      el,
      () => {
        const length = data.value.length + 1;
        data.value.push(...Array.from({ length: 5 }, (_, i) => length + i));
      },
      { distance: 10 }
    );

    const Scroll = useWindowScroll();
    const ScrollX = Scroll.x;
    const ScrollY = Scroll.y;
    return {
      avatarUrl,
      x,
      y,
      isLoading,
      error,
      breakpoints,
      sm,
      md,
      lg,
      location,
      width,
      height,
      inc,
      dec,
      count,
      mode,
      next,
      coords,
      locatedAt,
      el,
      data,
      Scroll,
      ScrollX,
      ScrollY,
    };
  },
};
</script>

<style>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.box > div {
  width: 300px;
  /* height: 200px; */
  border: solid 1px #000;
}
ul {
  text-align: left;
}
.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
.contrast {
  filter: contrast(2);
}

.dark {
  background: #000;
  color: #fff;
}
.dark div {
  border-color: #d3cfcf;
  color: #d3cfcf;
}
.light {
  background: #fff;
  color: #000;
}
.light div {
  border-color: #000;
  color: #000;
}

.cafe {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}
.cafe div {
  border-color: #000;
  color: #000;
}

.contrast {
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
}
.h-300px {
  height: 150px;
}
.bg-gray-500\/5,
[bg~="gray-500\/5"] {
  background-color: rgb(197 204 219 / 20%);
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.gap-2,
[flex~="gap-2"],
[gap-2=""],
[gap~="\32 "] {
  grid-gap: 0.5rem;
  gap: 0.5rem;
}
.h-30 {
  height: 30px;
}
.p-3 {
  padding: 0.75rem;
}
.flex.flex-col.gap-2.p-4.w-300px.h-300px.m-auto.overflow-y-scroll.bg-gray-500\/5.rounded {
  padding: 10px;
}
.h-30.bg-gray-500\/5.rounded.p-3 {
  background: #161414;
  margin-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
