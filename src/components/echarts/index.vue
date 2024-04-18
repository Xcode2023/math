<template>
    <div ref="main" class="v-100  vh-100" ></div>
</template>
<script setup>
import {ref,onMounted} from 'vue'
const main =ref()
import {myEcharts} from './index'
const {math} =myEcharts

onMounted(() => {
    math(main)  
})
</script>
<style scoped>

</style>