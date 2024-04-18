<template>
  <div class="container mt-md-5 mt-sm-0" ref="c1">
    <div ref="spline" class="row container spline">
      <div class="col-md-6" data-aos="fade-right">
        <!-- <Spline :path="splineModule1"></Spline> -->
      </div>
    </div>
    <div class="row container  mt-md-5 mt-sm-0">
      <div class="col-md-6 animate__animated animate__fadeInLeft">
        <img
          :src="myurl('content1-0', 1, 'jpg')"
          class="img-thumbnail"
          alt=""
          ref="gsapgoto5"
        />
      </div>
      <div class="col-md-6 col-sm-12 animate__animated animate__fadeInRight">
        <div
          class="bg-success-new2 p-5 rounded-5 col-sm-12 mt-sm-5 mt-md-0"
          ref="gsapgoto6"
        >
          <h1 class="fs-2" ref="peopletrigger">数学快讯</h1>
          <div class="row">
            <img
              :src="myurl('content', 1, 'png')"
              class="col-md-4 col-sm-12 h-75"
              width="350px"
            />
            <div
              class="col-md-8 text-decoration-underline"
              style="text-decoration-color: white"
            >
              <p class="  ">
                在魏晋时期，刘徽被誉为数学泰斗，他的14项伟大成就对后世产生了深远影响。...
              </p>
              <p class="d-sm-none d-md-block d-lg-block  ">
                明代时期，王文素、程大位、朱载堉、吴敬等四位数学家被誉为明代四大辉煌巨星。
              </p>
              <p class="d-sm-none d-md-block d-lg-block   ">
                《九章算术》成书约在东汉初年，标志着中国古代数学的成熟和系统化。
              </p>
            </div>
          </div>
        </div>
        <div class="position-relative">
          <div
            class="bg-success-new rounded-5 position-absolute w-100 bottom-50"
            ref="gsapgoto7"
          >
            <h1 class="p-3 text-white text-center">数学是打开科学大门的钥匙</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main class="container">
    <div class="mx-auto mt-5 d-flex justify-content-center align-items-center animate__animated animate__bounce">
      <img :src="url2(1)" style="height: 60px; width: 60px" alt="" />
      <h1 id="people  " ref="icon1">数学大家</h1>
    </div>
    <div class="row mt-md-5">
      <div
        class="col-md-3 col-sm-3 mt-sm-5"
        v-for="(x,y) in peopleAray"
        :key="y"
        :ref="'gsapgoto' + (y+1)"
      ><h2 class="text-center "> {{ x }}</h2>
        <div class="d-flex justify-content-center align-items-center">
          <img :src="url(y+1)" class="img-fluid" />
        </div>         

      </div>
    </div>
    <div class="mx-auto mt-5 d-flex justify-content-center align-items-center">
      <img :src="url2(2)" style="height: 60px; width: 60px" alt="" />
      <h1 @click="jumpto1" id="product" ref="icon2">数学著作</h1>
    </div>
    <div class="mt-5" ref="gsapgoto8"><BookList></BookList></div>
  </main>

  <main class="container">
    <div class="mx-auto mt-5 d-flex justify-content-center align-items-center">
      <img
        :src="url2(3)"
        style="height: 60px; width: 60px"
        alt=""
        ref="icon3"
      />
      <h1 id="appliction">数学应用</h1>
    </div>
    <div class="bg-success-new2 p-3 row mt-5">
      <div class="col-md-4">
        <img
          :src="myurl('content4-0', 1, 'jpg')"
          class="img-thumbnail"
          alt=""
          ref="gsapgoto9"
        />
        <h2
          class="fs-3 text-center bg-success-new p-4"
          style="color: var(--td-font-white-1)"
        >
          天文历法
        </h2>
      </div>
      <div class="col-md-4">
        <img
          :src="myurl('content4-0', 2, 'jpg')"
          class="img-thumbnail"
          alt=""   ref="gsapgoto10"
        />
        <h2
          class="fs-3 text-center bg-success-new p-4"
          style="color: var(--td-font-white-1)"
        >
          水利工程
        </h2>
        <div class="col-md-4"></div>
        <div class="row mt-5">
          <img
            v-for="(x, y) in 3"
            :key="y"
            :src="myurl('content41-', y, 'png')"
            class="img-fluid col-md-4 mt-sm-3 mt-md-0"
            alt="" ref="threebook"
          />
        </div>
      </div>
      <div class="col-md-4">
        <img
          :src="myurl('content4-0', 7, 'jpg')"
          class="img-thumbnail mt-sm-3 mt-md-0"
          alt=""   ref="gsapgoto11"
        />
        <h2
          class="fs-3 text-center bg-success-new p-4"
          style="color: var(--td-text-color-anti)"
        >
          建筑设计
        </h2>
      </div>
    </div>
  </main>
  <!-- next -->
  <main class="container">
    <div class="mx-auto mt-5 d-flex justify-content-center align-items-center">
      <img
        :src="url2(4)"
        style="height: 60px; width: 60px"
        alt=""
        ref="icon4"
      />
      <h1 ref="jump1" id="game">数学游戏</h1>
    </div>
    <div class="bg-success-new p-3 row mt-5">
      <div class="col-md-12" ref="gsapgoto12">
<router-link to=""></router-link>        <img
          :src="myurl('game', 1, 'png')"
          class="img-fluid"
          alt=""
         
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref, provide } from "vue";
import Spline from "@/pages/spline/index.vue";
import splineModule from "@/assets/box.spline";
import BookList from "@/pages/connect/bookList.vue";
import thetitleimg from "@/images/newimage/content1-01.jpg";

import Math from "@/components/echarts/math.vue";

import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import gsap from "gsap";
const splineModule1 = ref(splineModule);

gsap.registerPlugin(ScrollTrigger);

const {
  icon1,
  icon2,
  icon3,
  icon4,
  gsapgoto1,
  gsapgoto2,
  gsapgoto3,
  gsapgoto4,
  gsapgoto5,
  gsapgoto6,
  gsapgoto7,
  gsapgoto8,
  gsapgoto9,
  gsapgoto10,
  gsapgoto11,
  gsapgoto12,
  threebook,
  c1,
  jump1,
  peopletrigger,
} = {
  gsapgoto1: ref(),
  gsapgoto2: ref(),
  gsapgoto3: ref(),
  gsapgoto4: ref(),
  icon1: ref(),
  icon2: ref(),
  icon3: ref(),
  icon4: ref(),
  gsapgoto5: ref(),
  gsapgoto6: ref(),
  gsapgoto7: ref(),
  gsapgoto8: ref(),
  gsapgoto9: ref(),
  gsapgoto10: ref(),
  gsapgoto11: ref(),
  gsapgoto12: ref(),
  threebook: ref(),

  c1: ref(),
  jump1: ref(),
  peopletrigger: ref(),
};
const peopleAray=  ref([
"刘徽",'李治','祖冲之','秦九韶'
])
const theAnimation = () => {
  const tl2 = gsap.timeline({
    // duration: 1,
  });
  const tl1 = gsap.timeline({
    // duration: 1,
  });
  const tl3 = gsap.timeline({
    // duration: 1,
  });
  const tl4 = gsap.timeline({
    // duration: 1,
  });
  ScrollTrigger.create({
    trigger: peopletrigger.value,
    start: "-=350",
    end: "+=550",
    scrub: true,

    markers: false,
    onUpdate(e) {},
    animation: tl2
      .fromTo(
        gsapgoto1.value,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        gsapgoto2.value,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        gsapgoto3.value,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        gsapgoto4.value,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
        }
      ).to(gsapgoto5.value, {
        x: -40,
        opacity: 0,
      })
      .to(gsapgoto6.value, {
        x: 40,
        opacity: 0,
      })
      .to(gsapgoto7.value, {
        x: 40,
        opacity: 0,
      }),
  });
  ScrollTrigger.create({
    trigger: gsapgoto4.value,
    start: "top top",
    end: "+=400",
    scrub: true,

    markers: false,
    onUpdate(e) {},
    animation: tl1
      .fromTo(
        gsapgoto8.value,
        {
          opacity: 0.4,
          y:70,scale:0.4
        },
        {
          scale:1,
          opacity: 1,
          y: 0,
        }
      )
      .to(gsapgoto1.value, {
        y: -40,
        opacity: 0,
      })
      .to(gsapgoto2.value, {
        y: 40,
        opacity: 0,
      })
      .to(gsapgoto3.value, {
        y: 40,
        opacity: 0,
      })
      .to(gsapgoto4.value, {
        y: 40,
        opacity: 0,
      }).fromTo( gsapgoto8,{
        y: 40,
        opacity: 0,
      },{
        y: 40,
        opacity: 100,
      } ),
  });
  ScrollTrigger.create({
    trigger: icon3.value,
    start: "-=400",
    end: "+=400",
    scrub: true,

    markers: false,
    onUpdate(e) {},
    animation: tl3. fromTo(
      gsapgoto9.value,
      {
        opacity: 0,
        x: -70,
      },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(
      gsapgoto10.value,
      {
        opacity: 0,
        y: -70,
      },
      {
        opacity: 1,
        y: 0,
      }
    ).fromTo(
      gsapgoto11.value,
      {
        opacity: 0,
        x: 70,
      },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(threebook.value,{ opacity: 0,
        y: 70,},{ opacity: 1,
        y: 0,}),
  });
  ScrollTrigger.create({
    trigger: icon3.value,
    start: "-=400",
    end: "+=600",
    scrub: true,

    markers: false,
    onUpdate(e) {},
    animation: tl4.fromTo(
      gsapgoto12.value,
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

const jumpto1 = () => {
  jump1.value.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "start",
  });
};
onMounted(function () {
  theAnimation();
});

const url = (e) => {
  const obj = new URL(
    `../../images/newimage/newpeople${e}@300x.png`,
    import.meta.url
  );
  return obj.pathname;
};
const url2 = (e) => {
  const obj = new URL(`../../images/newimage/icon${e}.png`, import.meta.url);
  return obj.pathname;
};
const myurl = (name, e, set) => {
  const obj = new URL(
    `../../images/newimage/${name}${e}.${set}`,
    import.meta.url
  );
  return obj.pathname;
};
</script>
<style scope>
.vediocontrol {
  width: 100vh;
  cursor: pointer;
}
</style>
