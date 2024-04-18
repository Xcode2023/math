<template>
  <main class="container">
    <Banner></Banner>
    <div
      class="row justify-content-center align-items-center d-flex mt-md-5 mt-sm-0"
    >
      <div class="col-md-2 mt-md-5 mt-sm-0" v-for="x in 5" :key="x">
        <div
          class="rounded-circle w-100 h-100 animate__animated animate__fadeInDown d-flex d-sm-none d-md-block d-lg-block"
          :class="`animate__delay-${x - 1}s`"
        >
          <router-link to="/tools">
            <img
              :src="url(x)"
              alt=""
              class="mx-auto"
              style="width: 100px; height: 100px"
          /></router-link>
        </div>
      </div>
    </div>
    <Body></Body>
    <main class="bg-success-new">
      <div class="mt-5 p-5">
        <h1 class="text-center">
          <i class="bi bi-badge-3d-fill text-success-emphasis me-1 fs-3"></i
          >数学与3D技术
        </h1>
        <div class="row mt-5">
          <div class="col-md-6"><Spline :path="splineModule1"></Spline></div>
          <div class="col-md-6">
            <p class="p-4 lh-lg">
              3D数学基础 一、内容概括
              虚拟现实技术的数学基础主要是3D数学基础,包括了3D向量运算、矩阵运算、3D几何变换和3D观察与投影变换。
              3D向量运算是制作三维图形、物理和动画的基础.
            </p>
            <router-link to="/newthree">
              <div class="btn btn-success ms-5">
                <i class="bi bi-boxes me-1"></i>前往了解
              </div></router-link
            >
          </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script setup>
import Banner from "@/components/banner.vue";
import { animation } from "@/allAnimation.js";
import Body from "@/pages/Index/body.vue";
import Spline from "@/pages/spline/index.vue";
import splineModule from "@/assets/box.spline";
const splineModule1 = ref(splineModule);
const url = (e) => {
  const obj = new URL(
    `../../images/newimage/title${e}@300x.png`,
    import.meta.url
  );
  return obj.pathname;
};
import { onMounted, ref } from "vue";
import { setupViewer } from "@/pages/three/webgi.js";

import hdr from "@/images/e.hdr";
import path from "@/assets/math_symbols.glb";

const webgiCanvasContainer = ref();
const webgiCanvas = ref();
const modulePath = ref(path);
const hdrPath = ref(hdr);

onMounted(async () => {
  const getPosition = await setupViewer(
    webgiCanvas.value,
    modulePath.value,
    hdrPath.value
  );
});
</script>
<style>
.titlecolor {
  background-color: #90988b;
}
</style>
