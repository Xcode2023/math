<template>
  <main ref="box"><canvas id="canvas3d" ref="canvas"></canvas></main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Application } from "@splinetool/runtime";
import {parallaxAnimation} from '@/pages/Index/parallaxAnimation.js'
const mydata = defineProps({
  path: String,
});

const box = ref();

const canvas = ref(null);
onMounted(() => {
  const app = new Application(canvas.value);

  app.load(mydata.path);
  // app.load("public/home.spline");
  // parallaxAnimation(box.value)
})
</script>
<style scoped></style>
