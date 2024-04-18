<template>
  <div class="container">
 <div ref="main" class=" vh-100 w-100 " style=""></div>
  </div> 
 
</template>
<script setup>
import { ref, onMounted } from "vue";
const main = ref();
import { myEcharts } from "./index";
const { Gradient } = myEcharts;

onMounted(() => {
  Gradient(main);
});
</script>
<style scoped>

</style>
