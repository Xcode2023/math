<template>
  <section class="d-block w-100 h-100">
    <main :style="{ background: `url(${bg}) no-repeat top center/cover` }">
      <div class="container z-3">
        <div class="row" ref="bound">
          <div class="col-md-4">
            <img
              ref="box1"
              :src="me"
              class="img-fluid z-1"
              style="height: 28.125rem"
              alt=""
            />
            <div class="started_text animated fadeInDown">
              <a ref="box2" href="#" class="">{{ $t("messages.learnmore") }}</a>
            </div>
          </div>
          <div class="col-md-4 animated fadeInDown">
            <div class="banner_img">
              <img ref="box3" :src="ig1" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="ms-5 fs-5">
              <ul ref="box4" class="z-1 animated fadeInDown">
                <li v-for="(x, y) in hrefs3" ref="box5" :key="y">
                  <router-link :to="x.to">
                    <i :class="x.icon"></i>
                    {{ $t("messages." + x.name) }}
                    <span>/</span>
                  </router-link>
                </li>
              </ul>

              <main>
                <lord-icon
                  src="https://cdn.lordicon.com/bxxnzvfm.json"
                  trigger="loop"
                  delay="400"
                  colors="primary:#1b1091,secondary:#3080e8,tertiary:#f9c9c0,quaternary:#ebe6ef"
                  state="hover-2"
                  style="width: 250px; height: 250px"
                >
                </lord-icon>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>

   
</template>
<script setup>
import { animation } from "@/allAnimation.js";
import { ref, reactive, h, getCurrentInstance, onMounted } from "vue";


defineElement(lottie.loadAnimation);
import img1 from "@/images/newbanner-bg2.png";
import me from "@/images/me.png";
import { useCounterStore } from "@/stores/counter.js";
import { useI18n } from "vue-i18n";

import img2 from "@/images/logocopy.png";


const { bound, box1, box2, box3, box4, box5, codebox } = {
  box1: ref(),
  box2: ref(),
  box3: ref(),
  box4: ref(),
  box5: ref(),
  codebox: ref(),
  bound: ref(),
};

// codebox.value=h(highlightedCode.value)

// console.log($this.proxy);

const bg = ref(img1);
const ig1 = ref(img2);

const { hrefs3 } = useCounterStore();

onMounted(() => {
  animation(bound, box1, box2, box3, box4, box5);
});
// (function () {
//   axios
//     .request("https://www.mengrao.site/api/message/del")
//     .then(function (response) {
//       let index = response.data.code;
//       if (index > 200) {
//         ElNotification({
//           type: "error",
//           title: "错误",
//           message: "服务器似乎并没有响应，你确定服务器在正常运转吗·V·",
//         });
//         ElNotification({
//           type: "error",
//           title: "提醒",
//           message: "注意。编辑以及更新留言需要注册登录之后才可进行更改·V·",
//         });
//       }
//     })
//     .catch((error) => {
//       ElMessage.error("你似乎并没有将数据库安装在云端运行");
//       ElMessage.warning("你似乎并没有将数据库安装在云端运行");
//       setTimeout(() => {
//         ElNotification({
//           type: "warning",
//           title: "线下状态",
//           message: "您似乎处于线下文件模式运行本工程",
//           position: "bottom-right",
//         });
//       }, 2000);
//     });
// })();

// const getItems = function () {
//   axios("https://www.mengrao.site/api/message/get_list").then((e) => {
//     const res = e.data;
//     if (res.code != 200) {
//       ElMessage.error("获取失败");
//     } else {
//     }
//   });
// };
// getItems();
</script>
<style scoped>
.header_section {
  width: 100%;
  float: left;

  height: auto;
}
.spline {
  z-index: 1;
  /* width: 31vw;
  height: 
  /* right: 0;
  top: 40%; */
}
.img1 {
  top: -76%;
  left: 0;
  width: 2310px;
}
.img2 {
  top: -76%;
  left: 0;
  width: 2310px;
}
.img3 {
  top: -76%;
  left: 0;
  width: 2310px;
}
.img4 {
  top: -7%;
  right: 0;
  width: 294px;
}
.psa {
  position: absolute;
}
.psr {
  position: relative;
}
</style>