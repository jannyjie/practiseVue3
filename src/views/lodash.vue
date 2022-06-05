<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#AA"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          常用的方法
        </button>
      </h2>
      <div
        id="AA"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <P>import _get from 'lodash/get'</P>
          <P>import _map from 'lodash/map' </P>
          <P>import _uniq from 'lodash/uniq'</P>
          <P> import _pick from 'lodash/pick'</P>
          <P> import _omit from 'lodash/omit' </P>
          <P> import _isNaN from 'lodash/isNaN' </P>
          <P> import _property from 'lodash/property'</P>
          <P> import _findIndex from 'lodash/findIndex'</P>
          <P> import _isUndefined from 'lodash/isUndefined'</P>
          <P> import _isString from 'lodash/isString' </P>
          <P> import _debounce from 'lodash/debounce'</P>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          1. 在指定範圍內獲取一個隨機值
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <random />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          2._.assign 方法也可以接收多個引數物件進行擴充套件。
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <assign />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          3._.sample 從列表中隨機的選擇列表項
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <sample />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefoue"
          aria-expanded="false"
          aria-controls="collapsefoue"
        >
          <p>4._.isEmpty 檢查 value 是否為空</p>
        </button>
      </h2>
      <div
        id="collapsefoue"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            注意：該方法主要適用於Collection 或
            Object，尤其不適用於Number、Boolean等值，下面會詳細說明。 參數：
            value，要檢查的對象
          </p>
          <p>
            由於 isEmpty 不能有效判斷 Boolean 和 Number
            ，所以，使用這個函數的需要特別小心，最好自己再封裝一個函數，做下容錯
          </p>
          <isEmpty />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefive"
          aria-expanded="false"
          aria-controls="collapsefive"
        >
          <p>4._.debounce方法可以延遲執行</p>
        </button>
      </h2>
      <div
        id="collapsefive"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>註：debounce可以翻防抖動或防反動都行</p>
          <debounce />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import random from "../components/lodash/random.vue";
import assign from "../components/lodash/assign.vue";
import sample from "../components/lodash/sample.vue";
import isEmpty from "../components/lodash/isEmpty.vue";
import debounce from "../components/lodash/debounce.vue";
export default {
  name: "lodashPage",
  components: {
    random,
    assign,
    sample,
    isEmpty,
    debounce,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
