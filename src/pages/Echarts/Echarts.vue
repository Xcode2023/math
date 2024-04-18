<template><main class="bg-black "></main>
 
    <div class="container">
   <div ref="main" class="vh-100 vw-100" style="width: 230px;height: 560px;"></div>
   <div ref="main2" class="vh-100 vw-100 thetextshadow thetextshadow" style="width: 230px;height: 260px;"></div>
   <div ref="main3" class="vh-100 vw-100" style="width: 230px;height: 160px;"></div>
    </div> 
    
   
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  const main = ref();
  const main2 = ref();
  const main3 = ref();
  import { myEcharts } from "./index";
  const { makeEcharts,makeEcharts2 ,math} = myEcharts;
  
  onMounted(() => {
    makeEcharts(main);
    makeEcharts2(main2);
    math(main3);
  });
  </script>
  <style scoped>
  
  </style>
  