<template>
  <div id="content" v-cloak>
    <h1>連續打API</h1>
    <form @submit.prevent="submit">
      <div class="list" v-for="item in addList" :key="item">
        <h4 class="title">
          <label for=""
            ><input
              type="checkbox"
              class="item-check-btn"
              v-model="item.checked"
              @click="selectAll(item)"
          /></label>
          {{ item.name }}
        </h4>
        <ul class="menu">
          <li v-for="(s, index) in item.children" :key="s">
            <label for="">
              <input
                type="checkbox"
                :value="index"
                v-model="s.checked"
                class="item-check-btn"
                @click="selectItem(item, s, index)"
              />
            </label>
            {{ s.email }}
          </li>
        </ul>
      </div>
      <div class="bottom_btn">
        <input type="submit" value="确认选择" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
// // import { ref, watch } from "vue";
// import { login } from '@/api/index'
import axios from "axios";
export default {
  data: function () {
    return {
      addList: [
        {
          name: "用户管理",
          checked: true,
          children: [
            {
              email: "javascriptBasics@gmail.com",
              password: "1234",
            },
            {
              email: "javascriptBasics@gmail.com",
              password: "q1234",
            },
            {
              email: "javascriptBasics@gmail.com",
              password: "b1234",
            },
            // { name: "添加", checked: false },
            // { name: "删除", checked: false },
            // { name: "修改", checked: false },
          ],
        },
      ],
    };
  },
  methods: {
    selectAll: function (item) {
      //如果父级被选中，那么子集循环，全被给checked=true
      if (item.checked) {
        item.children.forEach(function (item) {
          item.checked = true;
        });
      } else {
        //相反，如果没有被选中，子集应该全部checked=false
        item.children.forEach(function (item) {
          item.checked = false;
        });
      }
    },
    selectItem: function (item, s) {
      //父级选中条件
      //子集有选中的，那么父级checked=true
      //some检测的就是有一个满足的就为true
      item.checked = s.checked ? true : item.children.some((a) => a.checked);
    },
    submit: function () {
      //去拿所有的数据，返回给后台
      //   var formData = this.addList;
      //   console.log(this.addList.children);
      let num = 0;
      for (let i = 0; i < this.addList.length; i++) {
        const element = this.addList[i].children;

        for (let index = 0; index < element.length; index++) {
          if (index === num) {
            num++;
            // console.log(1);
            setTimeout(() => {
              //   axios
              //     .get("https://randomuser.me/api/?gender=female&nat=us")
              //     .then((response) => console.log(`num${index}`, response)) //得出來的是類似Response的物件，裏面的data才是我們想抓的資料
              //     .catch((error) => console.log(error));
              //POST請求
              axios
                .post("https://hexschool-tutorial.herokuapp.com/api/signup", {
                  email: element[index].email,
                  password: element[index].password,
                })
                .then((response) => console.log(`num${index}`, response))
                .catch((error) => console.log(error));
            }, 2000 * index);
          }
          //   console.log(element[index]);
        }
      }
    },
  },
};
</script>

<style></style>
