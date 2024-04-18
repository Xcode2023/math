<template>
  <main class="container">
    <div
      class="mx-auto mt-5 d-flex justify-content-center align-items-center animate__animated animate__bounce"
    >
      <img :src="url2(1)" style="height: 60px; width: 60px" alt="" />
      <h1 id="people  " ref="icon1">数学大家</h1>
    </div>
    <div class="row mt-md-5">
      <div
        class="col-md-3 col-sm-3 mt-sm-5"
        v-for="(x, y) in peopleAray"
        :key="y"
      >
        <h2 class="text-center">{{ x }}</h2>
        <div class="">
          <img :src="url(y + 1)" class="img-fluid" />
        </div>
      </div>
    </div>
  </main>
  <div ref="mod">
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
import { ref, onMounted } from "vue";


const mod = ref();
const url2 = (e) => {
  const obj = new URL(`../images/newimage/icon${e}.png`, import.meta.url);
  return obj.pathname;
};
const url = (e) => {
  const obj = new URL(
    `../images/newimage/newpeople${e}@300x.png`,
    import.meta.url
  );
  return obj.pathname;
};
const peopleAray = ref(["刘徽", "李治", "祖冲之", "秦九韶"]);

</script>
