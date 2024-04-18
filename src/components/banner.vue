<template>
  <section class="row mt-5 animate__zoomInDown animate__animated">
    <section class="col-md-12">
      <t-swiper class="tdesign-demo-block--swiper" type="card" :height="250">
        <t-swiper-item v-for="x in 3" :key="x">
          <img :src="url(x)" alt="" class="img-fluid" />
        </t-swiper-item>
      </t-swiper>
    </section>
  </section>
</template>
<script setup>
import { reactive, ref } from "vue";

const url = (e) => {
  const obj = new URL(`../images/newimage/banner${e}.png`, import.meta.url);
  return obj.pathname;
};

</script>
<style scoped>

</style>
