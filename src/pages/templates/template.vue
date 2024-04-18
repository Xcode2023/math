<template>
  <main class="container mt-5 rounded-5 bg-success-new p-5">
    <h2 class="text-center mt-2 fs-2">{{ bookname }}</h2>
    <main class="row">
      <div class="col-md-12 p-5">
        <div class="position-relative">
          <h2 class="ver position-absolute fs-2  animate__animated animate__fadeInDown" style="top: 7%; left: 40%">
            {{ bookname }}
          </h2>
          <div class="">
            <img
              :src="myurl('template', 1, 'png')"
              class="img-fluid top-0 left-0 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
    <div class="row text-center">
      <div class="col-md-4">
        <h2>
          <i class="bi bi-book text-success-emphasis me-2"></i>书籍名称:{{
            bookname
          }}
        </h2>
      </div>
      <div class="col-md-4">
        <h2>
          <i class="bi bi-filetype-sql text-success-emphasis me-2"></i
          >数据库中第{{ id }}册
        </h2>
      </div>
      <div class="col-md-4">
        <h2>
          <i class="bi bi-person-lines-fill text-success-emphasis me-2"></i
          >作者:{{ author }}
        </h2>
      </div>
    </div>

    <h2 class="lh-lg p-5">
      <i class="bi bi-paragraph text-success-emphasis me-2"></i>简介:{{
        content
      }}
    </h2>
    <div class="d-flex justify-content-center align-items-center">  <router-link to="/work">
      <t-button variant="dashed" theme="success"
        ><i class="bi bi-box-arrow-left text-success-emphasis me-2"></i
        >返回书库</t-button
      ></router-link
    ></div>
  
    <h2 class="text-end mt-5">上传时间:{{ create_time }}</h2>
    <h2 class="text-end mt-2">更新时间:{{ update_time }}</h2>
  </main>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";

// 如若部署数据库：后端获取方式
// 如若部署未数据库：前端pinia静态数据获取方式
// import axios from "axios";
// axios.request("http://127.0.0.1:8000").then((e) => {
//   newdata.value = e.data;
//   console.log(e.data);
// });
const myurl = (name, e, set) => {
  const obj = new URL(
    `../../images/newimage/${name}${e}.${set}`,
    import.meta.url
  );
  return obj.pathname;
};
const router = useRouter();
const route = useRoute();

const stores = useCounterStore();

const { id, bookname, author, content, create_time, update_time } =
  stores.math[route.params.type];
</script>
<style scoped>
.ver {
  writing-mode: vertical-rl;
}
</style>
