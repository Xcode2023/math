<template>
  <!-- 图片切换主页 -->

  <div class="header bg-success-new">
    <nav
      class="navbar navbar-expand-lg navbar-light text-danger header"
    >
      <router-link
        data-aos="fade-up"
        class="navbar-brand  text-whiteanimated fadeInUp ms-5 "
        href="index.html"
        :to="'/'"
        @click="place('index')"
        ><img :src="mylogo" class="img mt-md-2 mt-sm-0 d-sm-none d-md-block d-lg-block"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <label class="burger" for="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul class="nav flex-column animated fadeInDown" id="theul">
          <li
            ref="linkGsap"
            class="nav-item mx-auto"
            v-for="(item, i) in st.hrefs"
            :key="i"
          >
            <router-link
              active-class="active"
              :to="item.to"
              class="hrefs text-center  nav-link animate__animated animate__delay-1s"
              @click="place(item.name)"
            >
           {{ $t("messages." + item.name) }}
            </router-link>
          </li>
        </ul>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto animated fadeInDown mx-auto">
          <li
            ref="linkGsap"
            class="nav-item animate__animatedfadeInUp justify-content-center animate__delay-1s"
            v-for="(item, i) in st.hrefs"
            :key="i"
          >
            <router-link
              :to="item.to"
              class="hrefs nav-link w-100  "
              @click="place(item.name)"
            >
     {{ $t("messages." + item.name) }}
            </router-link>
          </li>
          <li class="nav-item d-sm-none mx-sm-auto d-md-block mt-3">
            <Auto> </Auto>
          </li>
        </ul>

        <form class="form-inline mt-2">
          <div class="login_bt">
            <ul
              class="littlelable d-flex justify-content-md-around justify-content-between align-items-center"
            >
              <!-- d-flex justify-content-center align-items-center -->
              <!-- <i class="bi bi-award-fill"></i> -->

              <li class="col">
                <t-switch size="medium" :onChange="switchthem">
                  <template #label="slotProps">
                    <template v-if="slotProps.value">
                      <el-icon :size="20">
                        <Moon />
                      </el-icon>
                    </template>
                    <template v-else>
                      <el-icon :size="20">
                        <Sunny />
                      </el-icon>
                    </template>
                  </template>
                </t-switch>
              </li>
              <li
                class="text-success   changeLanguage d-flex justify-content-center col"
              >
                <t-dropdown
                  :onClick="changeLocal"
                  :min-column-width="88"
                  :options="[
                    { content: 'EN', value: 1 },
                    { content: '中文', value: 2 },
                  ]"
                >
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                    data-v-12008bb2=""
                  >
                    <path
                      fill="currentColor"
                      d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
                    ></path>
                  </svg>
                </t-dropdown>
              </li>
              <t-popup content="前往GitHub查阅此工程文件，教师查阅" destroy-on-close>
              <li class="col d-flex justify-content-center">
                <a href="https://github.com/Xcode2023/math"
                  ><i class="bi bi-type-strikethrough text-success "></i></a>
              </li></t-popup>
              <li
                class="col d-flex justify-content-center  text-success"
                @click="st.startstatus = !st.startstatus"
              >
                <t-popup content="Close/Open Star" trigger="hover">
                  <i class="bi bi-star-fill"></i
                ></t-popup>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
    <div v-if="st.progressStatus">
      <PROGRESS class="position-absolute left-0 z-3 vw-100"></PROGRESS>
    </div>


  </div>

  <!-- <t-guide
    v-model="current"
    :steps="steps"
    @change="handleChange"
    @prev-step-click="handlePrevStepClick"
    @next-step-click="handleNextStepClick"
    @finish="handleFinish"
    @skip="handleSkip"
  /> -->
</template>

<script setup>
import Auto from "./auto.vue";
import { Hide, View, Sunny, Moon } from "@element-plus/icons-vue";
import logo from "@/images/newimage/logo.png";
import PROGRESS from "@/components/progress.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { useRouter } from "vue-router";
const router = useRouter();
import { reactive, ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
const mylogo = ref(logo);

import { useCounterStore } from "@/stores/counter.js";

const st = useCounterStore();
const CurrentInstance = getCurrentInstance();
const { locale, setLocaleMessage } = useI18n();

const changeLocal = (data) => {
  const els = locale.value === "zh" ? true : false;

  els ? (locale.value = "en") : (locale.value = "zh");

  ElNotification({
    type: "success",
    title: "language checked🌍",
    message: t("messages.languagechange"),
    position: "bottom-right",
  });
  console.log(els);
  console.log(data.content);
};

let switchthemvalue = ref(false);
let switchthemvalue2 = ref(true);
const switchthem = function () {
  switchthemvalue2.value = !switchthemvalue2.value;

  if (switchthemvalue2.value == false) {
    // td
    document.documentElement.setAttribute("theme-mode", "dark");

    // bs
    document.documentElement.setAttribute("data-bs-theme", "dark");

    // el
    document.documentElement.classList.add("dark");

    ElMessage({
      message: t("messages.changeDark"),
      type: "success",
    });
   
  } else {
    // td
    document.documentElement.setAttribute("theme-mode", "");
    // bs
    document.documentElement.setAttribute("data-bs-theme", "");

    // el
    document.documentElement.classList.remove("dark");
    ElMessage({
      message: t("messages.changeLight"),
      type: "success",
    });
  }
};
const place = function (y) {
  ElNotification({
    title: t("messages." + y),
    message: `${t("messages.changeto") + "" + t("messages." + y)}🌼`,
    type: "info",
  });
};
const getplace = () => {
  axios("https://ip.useragentinfo.com/json").then((data) => {
    console.log(data.data);
  });
};

const visible = ref(false);
const current = ref(-1);

const steps = [
  {
    element: ".changeLanguage",
    title: "工具导航",
    body: "此处工具栏可任选主题与语言",
    placement: "bottom-right",
    highlightPadding: 48,
    // 示例代码有效
    // highlightContent: () => <div style={{ width: '500px', height: '150px' }}>自定义引导</div>
    // 示例代码有效
    // highlightContent: <div style={{ width: '500px', height: '150px' }}>自定义引导</div>,
  },
  {
    element: ".changeLanguage",
    title: "阅读模式",
    body: "提供阅读模式语言Github链接",
    placement: "bottom",
  },
  {
    element: ".changeLanguage",
    title: "i18n",
    body: "i18n已适配你可随意切换语言",
    placement: "right",
  },
];
setTimeout(() => {
  current.value = 0;
}, 4000);

const handleChange = (current, { e, total }) => {
  console.log(current, e, total);
};

const handlePrevStepClick = ({ e, prev, current, total }) => {
  console.log(e, prev, current, total);
};

const handleNextStepClick = ({ e, next, current, total }) => {
  console.log(e, next, current, total);
};

const handleFinish = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};

const handleSkip = ({ e, current, total }) => {
  visible.value = false;
  console.log(e, current, total);
};

onMounted(() => {});

// console.log(localStorage.getItem("token") + "HELLO");
</script>
<style scoped>
.img {
  /* width: 230px; */
  width: 3.2875rem;

}
.active {
  background-color: #4d693d;
  /* background: linear-gradient(358deg, #5b247a, #1bcedf); */
}
.header {
  /* background: #dcecf5; */
  box-shadow: 1px 1rem 4rem rgba(16, 19, 41, 0.185);
}

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}
.littlelable {
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
    0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 99px;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
.c {
  cursor: pointer;
}
</style>
