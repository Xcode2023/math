<template>
  <el-progress
    :percentage="st.progress"
    :color="colors"
    class="boxshadow rounded-0 vw-100 w-100"
    :class="pr.class"
    :text-inside="true"
  >
    <template>
      <div class="d-none"></div>
    </template>
  </el-progress>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { Minus, Plus } from "@element-plus/icons-vue";
import { useCounterStore } from "@/stores/counter.js";

const st = useCounterStore();

const pr = defineProps({
  class: String,
});
const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

let progressFunction = () => {
  let a = setInterval(() => {
    if (st.progress >= 100) {
      clearInterval(a);
      console.log('clearInterval a');
      
    } else {
      st.progress += 20;
    }
    console.log(st.progress);
  }, 1600);
};

// watch( ()=>st.pushFrequency,() => {
//   st.progress=0
//   progressFunction()

//   });

onMounted(() => {
  st.progress = 0;
  progressFunction();
});
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  /* width: 350px; */
}
.demo-progress .el-progress--circle {
  /* margin-right: 15px; */
}
/* .boxshadow {
  box-shadow:  7px 7px 14px #395bc383,
              0px  0px 0px #4d7bff;
} */
</style>
