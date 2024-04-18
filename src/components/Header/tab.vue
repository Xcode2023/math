<template>
  <section class="container" style="height: 100%">
    <el-tabs>
      <el-tab-pane v-for="(x, y) in st.hrefs4" :key="y">
        <template #label>
          <span class="">
            <img :src="p1" style="width: 123px; height: 123px" alt="" />
            <h6 class="text-center mb-3">{{    y+1+'.' }} {{ $t(`odwr.${x.name}` )  }}</h6>
          </span>
        </template>
        <main class="row">
          <div class="col-md-2">
            <img :src="p1" style="width: 123px; height: 123px" alt="" />
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col">
                <img :src="p1" style="width: 123px; height: 123px" alt="" />
              </div>
              <div class="col">
                <img :src="p1" style="width: 123px; height: 123px" alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img :src="p1" style="width: 123px; height: 123px" alt="" />
              </div>
            </div>
            <img :src="p1" style="width: 123px; height: 123px" alt="" />
          </div>
          <div class="col-md-2">
            <img :src="p1" style="width: 123px; height: 123px" alt="" />
          </div>
        </main>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script  setup>
import { Calendar } from "@element-plus/icons-vue";
import photo1 from "@/images/images/alpha/alphabaiwei.png";
import { useCounterStore } from "@/stores/counter.js";

const st = useCounterStore();
import { ref } from "vue";
const p1 = ref(photo1);



</script>
<style>
.el-tabs__item {
  height: 100%;
}
</style>
