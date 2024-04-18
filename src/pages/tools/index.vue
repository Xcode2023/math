<template>
  <div ref="bound"  class=" mt-sm-5   mt-md-0 " >
    <section class="container mb-3">
      <el-alert type="error" effect="light" show-icon closable>
        注意本站已经取消对
        <el-link
          href="https://apps.apple.com/us/app/tiktok/id835599320"
          target="_blank"
          >TikTo</el-link
        >
        的支持,不对
        <el-tag type="info">TikTok</el-tag> 的数据进行转发,其余不变!</el-alert
      >
    </section>

    <!-- <h2 class="fs-2 text-center tools">Wilson-Tools</h2> -->

    <section class="row mb-5">
      <main class="col-md-1"></main>
      <main class="col-md-10 rounded-3 shadow-lg">
        <el-table
          :show-overflow-tooltip="true"
          header-row-class-name="text-primary text-center fs-5 mb-5 "
          cell-class-name=" "
          :data="filterTableData"
          :row-style="rowStyle"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column label="Name/ID" prop="name">
            <template #header>
              <div style="display: flex; align-items: center">
                <i class="bi bi-tag-fill"></i>
                <span style="margin-left: 10px"> {{ nameArray[0].name }} </span>
              </div>
            </template></el-table-column
          >
          <el-table-column label="Date<T>" prop="date">
            <template #header>
              <div style="display: flex; align-items: center">
                <i class="bi bi-alarm"></i>
                <span style="margin-left: 10px"> {{ nameArray[0].data }} </span>
              </div>
            </template>
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <i class="bi bi-alarm"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </div>
            </template></el-table-column
          >
          <el-table-column label="Value/Type" prop="info">
            <template #header>
              <div style="display: flex; align-items: center">
                <i class="bi bi-regex"></i>
                <span style="margin-left: 10px">
                  {{ nameArray[0].value }}
                </span>
              </div>
            </template>
            <template #default="scope">
              <el-popover
                effect="light"
                trigger="hover"
                placement="top"
                width="auto"
              >
                <template #default>
                  <div>name: {{ scope.row.name }}</div>
                  <div>address: {{ scope.row.address }}</div>
                </template>
                <template #reference>
                  <el-tag>
                    <i
                      class="bi"
                      :class="{
                        'bi-boxes color-danger': !scope.row.push,
                        'bi-link': scope.row.push,
                      }"
                    ></i>
                    {{ scope.row.info }}</el-tag
                  >
                </template>
              </el-popover>
            </template></el-table-column
          >
          <el-table-column label="Can/Not-Push" prop="push">
            <template #header>
              <div style="display: flex; align-items: center">
                <i class="bi bi-type-strikethrough"></i>
                <span style="margin-left: 10px"> {{ nameArray[0].push }} </span>
              </div> </template
            ><template #default="scope">
              <el-popover
                effect="light"
                trigger="hover"
                placement="top"
                width="auto"
              >
                <template #default>
                  <div>name: {{ scope.row.name }}</div>
                  <div>address: {{ scope.row.address }}</div>
                </template>
                <template #reference>
                  <el-button
                    :class="{
                      'text-danger': !scope.row.push,
                      'text-success': scope.row.push,
                    }"
                  >
                    <i
                      class="bi"
                      :class="{
                        'bi-exclamation-triangle-fill': !scope.row.push,
                        'bi-hammer': scope.row.push,
                      }"
                    ></i>
                    {{ scope.row.push }}</el-button
                  >
                </template>
              </el-popover>
            </template></el-table-column
          >
          <el-table-column>
            <template #header>
              <el-input
                v-model="search"
                size="large"
                placeholder="检索关键字"
                :prefix-icon="View"
              />
            </template>
            <template #default="scope">
              <div
                type="warning"
                class="btn btn-primary me-3"
                size="large"
                @click="handleEdit(scope.$index, scope.row)"
              >
                <i class="bi bi-clipboard2-heart-fill"></i> 复制
              </div>
              <div
                class="btn btn-link me-3"
                size="large"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)"
              >
                <!-- <i class="bi bi-lightning-charge-fill"></i>  -->
                <lord-icon
                  src="https://cdn.lordicon.com/ymliibsr.json"
                  trigger="loop"
                  delay="1000"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  style="width: 25px; height: 25px"
                >
                </lord-icon>
                执行
              </div>
            </template>
          </el-table-column>
        </el-table>
      </main>
      <main class= "col-md-1"></main>
    </section>
    <div ref="spline" class=" container spline">
      <div class="row">      <div class="col-md-6"><Spline :path="splineModule1"></Spline></div>
 <div class="col-md-6">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h1 class="fs-2 thetextshadow">
              <i class="bi bi-paragraph"></i>What is Clash?
            </h1>
            <p>
              Welcome to the official knowledge base of the Clash core project
              ("Clash"). Clash is a cross-platform rule-based proxy utility that
              runs on the network and application layer, supporting various
              proxy and anti-censorship protocols out-of-the-box. It has been
              adopted widely by the Internet users in some countries and regions
              where the Internet is heavily censored or blocked. Either way,
              Clash can be used by anyone who wants to improve their Internet
              experience.
            </p>

            <p>
              Clash: the open-source version released at
              github.com/Dreamacro/clash
            </p>
            <p>
              Clash Premium: proprietary core with TUN support and more (free of
              charge)
            </p>
          </div>
        </div>
      </div></div>
     
    </div>
  </div>
</template>

<script lang="ts" setup>import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);
import Spline from "@/pages/spline/index.vue"  ;
import { animation } from "./animation.js";
import { useI18n } from "vue-i18n";
import splineModule from "@/assets/box.spline";

import { useRouter } from "vue-router";
const router = useRouter();
import { Hide, View, Sunny, Moon } from "@element-plus/icons-vue";
import { computed, ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers.js";
const spline = ref();
const splineModule1 = ref(splineModule);

const bound = ref();

const rowStyle = {
  fontSize: "1.3rem",
};
// use as global scope

interface Array {
  data: string;
  name: string;
  value: string;
  push: string;
}
// type Array=[da]

const nameArray: Array[] = [
  {
    data: "Date<T>",
    name: "Name/ID",
    value: "Value/Type",
    push: "Can/Not-Push",
  },
];
interface User {
  date: string;
  name: string;
  address: string;
  value: string;
  push: boolean;
  info: string;
}
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 0) {
    return "warning-row";
  } else if (rowIndex === 6) {
    return "success-row";
  }
  return "";
};
const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
  // navigator.clipboard.writeText(row.value)
  if (navigator.clipboard.writeText(row.value)) {
    ElNotification({
      position: "bottom-right",
      type: "success",
      title: "SuccessNotification",
      message: "复制成功",
    });
  }
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row.value);

  ElMessage({
    type: "success",

    message: "执行成功",
  });
  // router.push(row.value)
  // window.location.href = row.value;
  setTimeout(() => {
    window.open(row.value);
  }, 1000);
};

const tableData: User[] = [
  {
    info: "Link",
    push: true,
    value:
      "https://507gj.no-mad-world.club/link/c3N1ZdvPl3rZTeVB?clash=3&extend=1",
    date: "2023-05-03",
    name: "Wilson",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    info: "Application",
    push: false,
    value:
      "https://irfjf.no-mad-world.club/link/c3N1ZdvPl3rZTeVB?clash=3&extend=1",
    date: "2023-05-03",
    name: "Clash",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    info: "link",

    push: true,

    value:
      "https://feed.iggv5.com/c/1ed32fd6-76bd-408f-a831-bcf1c400fa9a/platform/clash/iGG-iGuge",

    date: "2023-05-02",
    name: "Google",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://mengrao.site",

    date: "2023-05-04",
    name: "chartGPT",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://jxksd.top",

    date: "2023-05-01",
    name: "ShellCode",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://iguge.net/",

    date: "2023-05-01",
    name: "GETGoogle",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: false,
    info: "Application",

    value:
      "https://registry.npmmirror.com/cfw-win64/0.0.10/files/Clash.for.Windows-0.20.16-ikuuu.zip",

    date: "2023-05-01",
    name: "ClashForWindows",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: false,
    info: "Application",

    value:
      "https://ghproxy.com/https://github.com/yichengchen/clashX/releases/download/1.117.1/ClashX.dmg",
    date: "2023-05-01",
    name: "ClashForMac",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://github.com/Xcode2023/vueshop",
    date: "2023-05-01",
    name: "GitHub",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://github.com/Xcode2023/vueshop",
    date: "2023-05-11",
    name: "反射测试链接",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://gitee.com/Wilsoncomeon",
    date: "2023-05-01",
    name: "Gitee",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "link",

    value: "https://dreamacro.github.io/clash/",
    date: "2023-05-01",
    name: "WhatisClash",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: false,
    info: "Appliction",

    value: "ssh 43.139.81.57 -l root",
    date: "2023-05-01",
    name: "LogIn",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "Link",

    value: "https://lordicon.com/icons/wired/lineal?group=free",
    date: "2023-05-01",
    name: "Lordicon",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    push: true,
    info: "Link",

    value: "https://ip.useragentinfo.com/",
    date: "2023-05-01",
    name: "IPtools",
    address: "IPtools get ",
  },
  {
    push: true,
    info: "Link",

    value: "https://www.aboutppt.com/",
    date: "2023-10-13",
    name: "AboutNavigation",
    address: "AboutNavigation",
  },
  {
    push: true,
    info: "Link",

    value: "https://sns-video-bd.xhscdn.com/note/c2d7bcb186af3d84c0ff76f655e95409a33731b1?attname=clash-for-android.apk",
    date: "2023-10-13",
    name: "ClashForAndroid",
    address: "ClashForAndroid",
  },
];

onMounted(() => {
  // animation(spline.value, bound.value);

  // console.log(spline.value);
});
</script>
<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: #a4a6bb46;
  /* --el-table-tr-bg-color: var(--el-color-warning-light-9); */
}
.el-table .success-row {
  /* --el-table-tr-bg-color: var(--el-color-success-light-9); */
  --el-table-tr-bg-color: #abacc875;
}
.spline {
  z-index: 4;

  border: 10px solid transparent;
}
.tools {
  /* background: linear-gradient(34deg,#2f34d2,#fff,#4e3abf); */

  text-shadow: 0px 1rem 3rem rgb(18, 34, 105);
  /* backdrop-filter: blue(2px); */
  /* color: transparent; */
  color: rgb(46, 73, 190);
  /* backdrop-filter: blue(2px); */
  /* color: transparent; */
  color: rgb(46, 73, 190);
}
</style>
