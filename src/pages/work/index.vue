<template>
  <div class="container">
    <div class="row">
      <div class="flex justify-content-center align-items-center">
        <img :src="myurl('gameicon', 1, 'png')" class="img-fluid me-4" alt="" />
        <h2 class="text-center">游戏的发展</h2>
      </div>

      <div class="col-md-6 p-5">
        <img
          :src="myurl('gamepeople', 1, 'png')"
          class="img-fluid animate__animated animate__zoomIn"
          alt=""
        />
      </div>
      <div class="col-md-6 p-5">
        <img
          :src="myurl('gamecontent', 4, 'png')"
          class="img-fluid animate__animated animate__bounce"
          alt=""
        />

        <img
          :src="myurl('tag', 1, 'png')"
          class="img-fluid mt-3 animate__animated animate__fadeInRight"
          alt=""
        />
        <img
          :src="myurl('gameliner', 1, 'png')"
          class="img-fluid mt-3 animate__animated animate__fadeInRight"
          alt=""
        />
      </div>
    </div>
    <div class="row">
      <div class="flex justify-content-center align-items-center">
        <img :src="myurl('gameicon', 2, 'png')" class="img-fluid me-4" alt="" />
        <h2 class="text-center">游戏种类</h2>
      </div>
      <div class="col-md-12 mt-5 animate__animated animate__zoomIn">
        <img :src="myurl('bg', 3, 'png')" class="img-fluid w-100" alt="" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12">
        <!-- <Spline
          :path="modulePath"
        ></Spline> -->
      </div>
    </div>
  </div>
  <div>
    
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import Spline from "@/pages/spline/index.vue";

import splineModule from "@/assets/game.spline";

const splineModule1 = ref(splineModule);



onMounted(async () => {

});
const myurl = (name, e, set) => {
  const obj = new URL(
    `../../images/newimage/${name}${e}.${set}`,
    import.meta.url
  );
  return obj.pathname;
};
</script>
<style scoped>
.ver {
  writing-mode: vertical-rl;
}
</style>
