<template>
  <main class="">
    <div class="mt-5 p-5">
      <h1 class="text-center">
        <i class="bi bi-badge-3d-fill text-success-emphasis me-1 fs-3"></i
        >模型的矢量运动
      </h1>

      <div class="row mt-5">

        <t-popup content="按住Ctrl拖动模型可移动视窗" destroy-on-close>
        <div class="col-md-12"><Spline :path="splineModule1"></Spline></div></t-popup>
        <div class="col-md-12">
          <p class="p-4 lh-lg"></p>
          <!-- <div class="btn btn-success ms-5">
              <i class="bi bi-boxes me-1"></i>前往了解
            </div> -->
        </div>
      </div>
    </div>
    <div class="mt-5 p-5">
      <h1 class="text-center">
        <i class="bi bi-badge-3d-fill text-success-emphasis me-1 fs-3"></i
        >数学运算对图形材质的模拟
      </h1>

      <div class="row mt-5">

        <div class="col-md-12">
     
          <section class="vh-100">
            <div ref="webgiCanvasContainer" id="webgi-canvas-container">
              <canvas
                class="w-100 h-100 rounded-2"
                ref="webgiCanvas"
                id="webgi-canvas"
              ></canvas>
            </div>
          </section>
        </div>
        <div class="col-md-12">
          <p class="p-4 lh-lg"></p>
          <!-- <div class="btn btn-success ms-5">
              <i class="bi bi-boxes me-1"></i>前往了解
            </div> -->
        </div>
      </div>
      <div class="mt-5 p-5">
        <h1 class="text-center">
          <i class="bi bi-badge-3d-fill text-success-emphasis me-1 fs-3"></i
          >数学运算对模型的重力感应
        </h1>

        <div class="row mt-5">
          <t-popup content="按住Ctrl拖动模型可移动视窗" destroy-on-close>
          <div class="col-md-12"><Spline :path="splineModulekb"></Spline></div></t-popup>
          <div class="col-md-12">
            <p class="p-4 lh-lg"></p>
            <!-- <div class="btn btn-success ms-5">
              <i class="bi bi-boxes me-1"></i>前往了解
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import Spline from "@/pages/spline/index.vue";
import { onMounted, ref } from "vue";
import splineModule from "@/assets/candy.spline";
import splineModule2 from "@/assets/cube.spline";
const splineModule1 = ref(splineModule);
const splineModulekb = ref(splineModule2);
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
<style scoped></style>
