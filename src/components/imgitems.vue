<template>
  <section class="row">
    <div
      class="col-md-4 mt-4"
      v-for="(x, y) in 9"
      :key="y"
      data-aos="fade-up"
      :data-aos-delay="y * 100"
    >
   
      <img :src="url(y)" alt="" ref="items" class="img-thumbnail" />
    </div>
  </section>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import gsap from "gsap";

const items = ref();

const url = (e) => {
  const obj = new URL(`../images/love${e}.png`, import.meta.url);
  return obj.pathname;
};

onMounted(() => {
  // gsap.fromTo(items.value, {
  //   opacity: 0,
    

  //   stagger: {
  //     from: "top",
  //     grid: "auto",
  //     amount: 1.5,
  //   },
  // });
});
</script>
<style scoped></style>
