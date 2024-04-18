<template>
  <Star v-if="stores.startstatus"></Star>
  <t-layout v-if="dispaly">
    <t-layout ref="canvas_snow">
      <t-affix ref="affix">
        <Header></Header>
      </t-affix>
      <t-layout>
        <t-content class="mt-5 mb-5">
          <!-- <t-alert
            theme="info"
            class="mt-sm-5 d-sm-block d-md-none d-lg-none"
            title="你当前为移动端浏览,本网站各种大型动效将隐藏,追求完整体验请移步桌面端"
            message=""
            close
          >
            <a href="mqqwpa://im/chat?chat_type=wpa&uin=2909643755"
              >宝～本网站为作业以及部分工具页，作者时间有限不对本网页进行适配哦，抱歉抱歉🧎‍♀️————什么❓要作者赶稿？去微信催更催更😊点击这里👀</a
            >
          </t-alert> -->
          <!-- d-block d-md-block d-sm-none d-lg-block -->
          <div class="">
            <router-view></router-view>
          </div>
        </t-content>
      </t-layout>
    </t-layout>

    <foot :theshow="false" school="ODWR" name="Math"></foot>
  </t-layout>

  <main
    v-if="condition"
    class="w-100 d-flex justify-content-center align-items-center flex-column vh-100"
  >
    <div
      v-if="stores.progressStatus"
      class="position-absolute top-0 left-0 z-3 w-100"
    >

      <PROGRESS class="w-100"></PROGRESS>
      <div class="mt-5"><EC></EC></div>
    </div>

    <div class="mb-4 spinner-border text-success" role="status">
      <span class="visually-hidden">欧德薇儿医药科技有限公司</span>
    </div>

  </main>
</template>

<script setup>
import gsap from "gsap";
import EC from "@/components/echarts/math.vue"
import { onMounted, reactive, ref, provide, watch } from "vue";
import foot from "@/components/foot.vue";
import Star from "@/components/star.vue";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { sakura } from "@/assets/css/sakura.js";
// defineElement(lottie.loadAnimation);
import { useCounterStore } from "@/stores/counter.js";
import Card from "@/pages/shared/Card/Card.vue";
const stores = useCounterStore();
import { Appanimation } from "@/allAnimation.js";
// console.log('iphone',
//   stores.Device
// );
const thesvg = ref();
import PROGRESS from "@/components/progress.vue";

import MusicCard from "@/pages/shared/PlayAudio/index.vue";
import anime from "animejs/lib/anime.es.js";

const canvas_snow = ref();
import thetitle from "@/components/title.vue";

const url1 = ref("https://pic1.imgdb.cn/item/63eba208f144a01007270683.jpg");
let dispaly = ref(false);
let condition = ref(true);
const time = 6000;
const d = () => {
  setTimeout(() => {
    dispaly.value = !dispaly.value;
    condition.value = !condition.value;
  }, time);
};
// const musicState = reactive({
//   id: "",
//   isPlay: false,
//   musicPath: "",
//   play: null,
//   pause: null,
// });
// provide("musicState", musicState);
const start = ref();
d();

onMounted(() => {
  // anime({
  //   targets: '.line-drawing-demo .lines path',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: "easeInOutSine",

  //   direction: "alternate",
  //   loop: true,
  // });
  // for (let i = 1; i < 5; i++) {
  //   gsap.fromTo(
  //     `#path${i}`,
  //     { strokeDasharray: "0" },
  //     { strokeDasharray: "80%", duration: 2, yoyo: true, repeat: -1 }
  //   );
  // }
  // for (let i = 1; i < 7; i++) {
  //   gsap.fromTo(
  //     `#path1${i}`,
  //     { strokeDasharray: "100%" },
  //     { strokeDasharray: "0", duration: 3 }
  //   );
  // }
  // setInterval( ()=>{  },900)
  // Appanimation(start)

  // 添加更多路径的动画...
});
</script>
<style>
.app {
  height: 100%;
}
.main {
  flex: 1;
}
</style>
