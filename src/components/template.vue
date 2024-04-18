<template>
  <main>
    <h2 v-for="(x, y) in newdata" :key="y">
      <!-- <span v-for="(item, y) in x" :key="y">{{ item }}</span> -->
      {{ x.name }}
    </h2>
    <h2>{{ route.params.type }}</h2>
 
  
  </main>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();
import { useProdcutStore } from "@/stores/product.js";

const st = useProdcutStore();


</script>
<style scoped></style>
