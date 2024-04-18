<template>
  <div class="container">
    <div class="row container mt-md-5 mt-sm-0">
      <div class="col-md-6 animate__animated animate__fadeInLeft">
        <img
          :src="myurl('content1-0', 1, 'jpg')"
          class="img-thumbnail"
          alt=""
          ref="gsapgoto5"
        />
      </div>
      <div class="col-md-6 col-sm-12 animate__animated animate__fadeInRight">
        <div
          class="bg-success-new2 p-5 rounded-5 col-sm-12 mt-sm-5 mt-md-0"
          ref="gsapgoto6"
        >
          <h1 class="fs-2" ref="peopletrigger">数学快讯</h1>
          <div class="row">
            <img
              :src="myurl('content', 1, 'png')"
              class="col-md-4 col-sm-12 h-75"
              width="350px"
            />
            <div
              class="col-md-8 text-decoration-underline"
              style="text-decoration-color: white"
            >
              <p class="  ">
                在魏晋时期，刘徽被誉为数学泰斗，他的14项伟大成就对后世产生了深远影响。
              </p>
              <p class="  ">
                明代时期，王文素、程大位、朱载堉、吴敬等四位数学家被誉为明代四大辉煌巨星。
              </p>
              <p class="  ">
                《九章算术》成书约在东汉初年，标志着中国古代数学的成熟和系统化。
              </p>
            </div>
          </div>
        </div>
        <div class="position-relative">
          <div
            class="bg-success-new rounded-5 position-absolute w-100 bottom-50"
            ref="gsapgoto7"
          >
            <h1 class="p-3 text-white text-center">数学是打开科学大门的钥匙</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const myurl = (name, e, set) => {
  const obj = new URL(`../images/newimage/${name}${e}.${set}`, import.meta.url);
  return obj.pathname;
};
</script>
<style scoped>
.box {
  line-height: 2rem;
}
</style>
