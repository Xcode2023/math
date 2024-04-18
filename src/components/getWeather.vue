<template>
  <section class="row mb-5 d-sm-none d-xs-none d-md-block d-lg-block">
    <main class="col-md-1"></main>
    <main
      class="col-md-10 d-sm-none d-xs-none d-md-block d-lg-block rounded-3 shadow-lg"
    >
      <!-- <el-table
        :show-overflow-tooltip="true"
        header-row-class-name="text-primary text-center fs-5 mb-5 "
        cell-class-name=" "
        :data="newWeather.value"
        :row-style="rowStyle"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column label="country" prop="country"> </el-table-column>
        <el-table-column label="short_name" prop="short_name">
        </el-table-column>
        <el-table-column label="province" prop="province"> </el-table-column>
        <el-table-column label="city" prop="city"> </el-table-column>
        <el-table-column label="isp" prop="isp"> </el-table-column>
        <el-table-column label="ip" prop="ip"> </el-table-column>
        <el-table-column label="net" prop="net"> </el-table-column>
      </el-table> -->
    </main>
    <main class="col-md-1"><p></p></main>
  </section>

  <h2 v-for="(x, y) in newWeather.value" :key="y">{{ x }}</h2>

  <!-- <section class="d-sm-none d-xs-none d-md-block d-lg-block">
    <h1>
      <i class="text-primary bi bi-balloon"></i> 你当前位置Place:{{
        newWeather
      }}
    </h1>
    <h1 class="d-flex justify-content-around align-items-center">
      <h2>
        <i class="text-primary bi bi-bezier"></i> 长度Length:{{
          newWeather.length
        }}
      </h2>
      <h2 ref="result">
        <i class="text-primary bi bi-door-open"></i> 已校准地点次数Count:
        {{ count }}
      </h2>
      <h1>
        <i class="text-primary bi bi-filetype-html"></i> 类型Type:{{ result }}
      </h1>
    </h1>



    <div class="mt-5 d-flex justify-content-center align-items-center">
      <div
        class="text-center btn btn-primary theboxshadow getButon"
        @click="getWeather()"
      >
        <i class="me-3 bi bi-send-check-fill"></i> Get Place Information
      </div>
    </div>
  </section> -->
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { CircleCloseFilled } from "@element-plus/icons-vue";
const router = useRouter();
const visible = ref(false);
let allWeatherArray = reactive([]);

console.log(allWeatherArray);
import { Hide, View, Sunny, Moon } from "@element-plus/icons-vue";
import { computed, onMounted, reactive, ref } from "vue";
//   let getWeather=ref(null)
// const getPrografe = () =>
// axios("https://api.uomg.com/api/rand.qinghua?format=json").then((e) => {
//     getWeather.value = e.data.content;
//   console.log(e.data);
// });

let newWeather = ref([]);
let result = ref();
let count = ref(0);
const nameArray = [
  { name: "country" },
  { name: "short_name" },
  { name: "province" },
  { name: "city" },
  { name: "area" },
  { name: "isp" },
  { name: "net" },
  { name: "ip" },
  { name: "code" },
  { name: "desc" },
];

const getWeather = () => {
  axios({
    method: "get",
    url: "https://ip.useragentinfo.com/json",
  }).then((e) => {
    let weatherArray = e.data;

    newWeather.value = Object.entries(weatherArray).map(([key, value]) => ({
      [key]: value,
    }));
    // console.log(newWeather.value[2]);

    // allWeatherArray.value.push(["--Wilson API"],newWeather);
    // console.log(allWeatherArray);

    count.value++;
  });
};

const rowStyle = {
  fontSize: "1.3rem",
};

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};
const search = ref("");
const filterTableData = computed(() =>
  newWeather.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index, row) => {
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
const handleDelete = (index, row) => {
  console.log(index, row.value);
  // router.push(row.value)
  // window.location.href = row.value;
  window.open(row.value);
};
const getWeather2 = function () {
  visible.value = !visible.value;
};
const tableData = [];
onMounted(() => {
  // getWeather();
});
</script>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.getButon:hover {
  transform: translateY(-3px);
}
</style>
