<template>
  <main>
    <div class="row bg-success-new rounded-5 p-5" ref="trigger">
      <div class="col-md-6" v-for="(x, y) in bookList" :key="y">
        <div class="row">
          <div class="col-md-8 p-4">
            <h2 class="text-center fs-3">{{ x.name }}</h2>
            <p class="p-3">
              {{ x.content }}
            </p>
          </div>
          <div class="col-md-4">
            <hr :class="{ 'd-none': y + 1 > 2 }" />
            <img
              :src="url(x.img)"
              class="img-fluid mt-4 mx-sm-auto"
              :class="{
                'mt-2': y + 1 > 2,
              }"
              style=""
              alt=""
              :ref="`bok${y + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </main>

  <main></main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const url = (e) => {
  const obj = new URL(`../../images/newimage/${e}@300x.png`, import.meta.url);
  return obj.pathname;
};
const bookList = [
  {
    name: "《周髀算经》",
    content:
      "被认为是中国最早的数学著作之一，其中包含了勾股定理的早期形式，即“勾三股四弦五”的定理。",
    img: "book1",
  },
  {
    name: "《张丘建算经》",
    content: "介绍了一些数学问题和解法，包括方程组的解法。",
    img: "book2",
  },
  {
    name: "《孙子算经》",
    content: "其包含了著名的“孙子定理”，即关于一次不定方程组的解法。",
    img: "book3",
  },
  {
    name: "《海岛算经》",
    content: "是《九章算术》的续作，主要讨论了天文历法和数学问题。",
    img: "book4",
  },
];

const { book1, book2, book3, book4, trigger } = {
  book1: ref(),
  book2: ref(),
  book3: ref(),
  book4: ref(),
  trigger: ref(),
};

const theAnimation = () => {
  const tl1 = gsap.timeline({
    // duration: 1,
  });

  ScrollTrigger.create({
    trigger: trigger.value,
    start: "-=400",
    end: "+=400",
    scrub: true,

    markers: true,
    onUpdate(e) {},
    animation: tl1
      .fromTo(
        book1.value,
        {
          opacity: 0,
          x: -70,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        book2.value,
        {
          opacity: 0,
          x: -70,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        book3.value,
        {
          opacity: 0,
          x: -70,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        book4.value,
        {
          opacity: 0,
          x: -70,
        },
        {
          opacity: 1,
          x: 0,
        }
      ),
  });
};

gsap.registerPlugin(ScrollTrigger);

onMounted(function () {
  // theAnimation();
});
</script>
<style scoped>
.bg-success-new {
  background-color: #90988b;
}
</style>
