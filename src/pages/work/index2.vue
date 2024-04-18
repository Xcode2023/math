<template>
  <div class="container" ref="container">
    <div class="row">
      <div class="col-md-3">
        <h3 class="text-center fs-3 bg-success-new2 p-4">
          <i class="bi bi-book me-1 textcolor"></i>古代数学书籍目录
        </h3>
        <ul>
          <t-dialog
            v-model:visible="visible1"
            theme="info"
            header="提示"
            body="书籍内容开发中"
            :on-close="close1"
            :cancel-btn="null"
            @confirm="onClickConfirm"
          />

          <li
            v-for="(x, y) in stores.math"
            :key="y"
            :class="{
              'bg-success-new2': (y + 1) % 2 == 0,
              'bg-success-new': (y + 1) % 2 !== 0,
            }"
            class="p-2 text-center c"
          >
            <router-link :to="`/template/${y }`"> 第{{
              y + 1
            }}册 {{ x.bookname }}</router-link>
          </li>
          <li class="p-2 text-center bg-success-new2" @click="visible1 = true">
            更多书籍更新中...
          </li>
        </ul>
      </div>
      <div class="col-md-9 position-relative">
        <t-popup content="本章图片可拖动哦" destroy-on-close>
          <div class="row">
            <img
              :src="myurl('page3', 2, 'png')"
              class="img-fluid col-md-3"
              alt=""
              ref="g1"
            />
            <div class="p-3 lh-lg bgnew col-md-9 d-flex justify-content-center">
              <p class="text animate__animated animate__fadeInDown">
                祖冲之 (429年-500年) ，字文远，生于籍贯范阳郡道丹阳郡建康县
                (今江苏南京)县
                (今河北省保定市滦水县)，南北朝时期数学家、天文学家、科学家。祖冲之是第一个将圆周率精确到小数点后第七位的科学家也是第一个发现并应用岁差现象的历法学家。
              </p>
            </div>
          </div></t-popup
        >
        <div class="row animate__animated animate__fadeInDown">
          <div class="col-md-7">
            <div class="col-md-2"></div>
            <div
              class="col-md-8 lh-lg p-3 bgnew d-flex justify-content-center align-items-center"
            >
              <p class="text">
                南齐时期设计制造了指南车、千里船、水雄磨等机械，展示了他在机械制造方面的才能。他晚年关心政治，写了《安边论》，建议政府开垦荒地发展农业，增强国力，安定民生，巩固国防。
              </p>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="tdesign-demo-image-viewer__base"></div>
          <img
            :src="myurl('page3', 3, 'png')"
            class="col-md-5 animate__animated animate__fadeInDown"
            style="
              width: 200px;
              height: 170px;
              position: absolute;
              bottom: 55%;
              right: 0;
            "
            alt=""
            ref="g2"
          />
        </div>

        <img
          :src="myurl('page3', 1, 'png')"
          class="img-fluid animate__animated animate__fadeInDown"
          alt=""
          ref="g3"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";

import { useCounterStore } from "@/stores/counter.js";
const stores = useCounterStore();
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const defineAniation = () => {
  const draggable = new Draggable(container.value, {
    bounds: container.value,
    onDragStart: function () {
      console.log("Drag started");
    },
    onDrag: function () {
      console.log("Dragging");
    },
    onDragEnd: function () {
      console.log("Drag ended");
    },
  });
};

const myurl = (name, e, set) => {
  const obj = new URL(
    `../../images/newimage/${name}${e}.${set}`,
    import.meta.url
  );
  return obj.pathname;
};
const container = ref();
const g1 = ref();
const g2 = ref();
const g3 = ref();

const visible = ref(false);

import { BrowseIcon } from "tdesign-icons-vue-next";
const visible1 = ref(false);
const close1 = () => {
  visible1.value = false;
};
const onClickConfirm = (context) => {
  const { e } = context;
  visible1.value = false;

  e.stopPropagation();
};
onMounted(() => {
  // defineAniation()
});
</script>
<style scoped>
.bgnew {
  background-color: #cbc7a4;
}
.text {
  text-align: 2rem;
}
</style>
