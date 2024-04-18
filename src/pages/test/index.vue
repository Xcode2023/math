<template>
  <section class="container position-relative">
    <span ref="title" class="myboxshadow fs-2">
      <i class="bi bi-paragraph"></i> <span ref="titleType"></span>
    </span>

    <img
      ref="myboxshadow"
      :src="mycode"
      class="myboxshadow1 img-fluid rounded"
      alt=""
    />
    <Spline
      :path="splineMoule1"
      class="position-absolute spline"
      ref="spline"
    ></Spline>

    <article
      ref="article"
      class="w-100 d-sm-none d-xs-none d-md-block d-lg-block mt-lg-5 bg-primary innder2 position-relative d-flex"
    >
      <div class="h-100 innder position-absolute" style="width: 12px"></div>
      <div class="col-md-11 text-white p-4" ref="type"></div>
    </article>
   
  </section>
  <main class="row mt-5">
    <div class="col-md-1"></div>
    <div class="col-md-10" ref="table">
      <getWeather></getWeather>
    </div>
    <div class="col-md-1"></div>
  </main>
</template>
<script setup>
import Spline from "@/pages/spline/index.vue";
import Typed from "typed.js";
import codeImg from "@/images/mycode.png";
import { ref, onMounted } from "vue";
import getWeather from "@/components/getWeather.vue";
import { animation } from "./gsapAnimate.js";
import splineMoule from "@/assets/rabbit.spline";
import img1 from "@/images/change.png";
const splineMoule1 = ref(splineMoule);
const mycode = ref(codeImg);
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const changeimg = ref(img1);
const type = ref();
const typetext1 =
  "This function can achieve access to your current ip information and operator information as detailed in the following table, and the site promises that this information is only saved in your personal browser and not uploaded to the cloud";

const stringContent = [typetext1];
const newTyped = (e, stringArray, speed) => {
  let options = {
    strings: stringArray,
    typeSpeed: speed,
    loop: false,
  };

  let typed = new Typed(e, options);
};

const { myboxshadow, title, table, article, spline, titleType } = {
  myboxshadow: ref(),
  title: ref(),
  table: ref(),
  article: ref(),
  titleType: ref(),
  spline: ref(),
};

onMounted(() => {
  // ScrollTrigger.create(
  //     myboxshadow.value,{
  //         x: -30,
  // y:-30,
  // pin:true,
  //     }
  // )
  newTyped(type.value, stringContent, 50);
  newTyped(titleType.value, ["i18", "i18n", t("messages.i18n")], 5);
  // animation(myboxshadow, title, table, article);
});
</script>
<style scoped>
.innder {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  left: 0px;
  background: #140229;
}
.innder2 {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
}
.myboxshadow {
  text-shadow: 0px 1rem 3rem rgb(18, 34, 105);
  /* backdrop-filter: blue(2px); */
  /* color: transparent; */
  color: rgb(46, 73, 190);
  /* filter: drop-shadow(0px 1rem 3rem rgb(46, 73, 190)); */
  /* -webkit-filter: drop-shadow(0px 10rem 3rem rgb(46, 73, 190)); */
  /* background-clip: text; */
}
.myboxshadow1 {
  box-shadow: 0 1rem 3rem rgb(46, 73, 190) !important;
}
.spline {
  z-index: 1;
  width: 31vw;
  height: 60vh;
  right: 0;
  top: 60%;
}
</style>
