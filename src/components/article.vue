<template>
<article
    ref="article"
    class="w-100 mt-lg-5 bg-primary innder2 position-relative d-flex"
  >
    <div
      class="bg-black h-100 innder position-absolute"
      style="width: 12px"
    ></div>
    <div class="col-md-11 text-white p-4" ref="type"><slot></slot>    </div>
  </article>
</template>
<script setup>
</script>
<style scoped>
.innder {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  left: 0px;
}
.innder2 {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
}
</style>