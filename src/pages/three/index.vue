<template>
  <div ref="">
    <main class="position-relative mt-6 vh-100 vw-100" ref="startEl"></main>

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
</template>
<script setup>
import { onMounted, ref } from "vue";
import { setupViewer } from "./webgi.js";
import { animationFuntion } from "./animate.js";
import hdr from "@/images/e.hdr";
import path from "@/assets/iphone.glb";


const webgiCanvasContainer = ref();
const webgiCanvas = ref();
const modulePath = ref(path);
const hdrPath = ref(hdr);
const startEl = ref();
let position, target, definAnimation;

const definePosition = async function (t) {
  position = t.position;
  target = t.target;
};

const animateStart = async function (startEl, position, target) {
  animationFuntion(startEl, position, target);
};

onMounted(async () => {
  const getPosition = await setupViewer(
    webgiCanvas.value,
    modulePath.value,
    hdrPath.value
  );
  await definePosition(getPosition);
  await animateStart(startEl, position, target);
});
</script>
<style scoped>
#webgi-canvas-container {
  width: 100vw;
  height: 100vh;
  /* margin: 10vh 5vw; */
  border-radius: 0.5rem;
  /* background: red; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
  position: fixed;
  left: 0;
  /* top: 100px; */
  top: 10%;
}
</style>
