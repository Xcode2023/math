<template>
  <div class="container">
    <main class="row">
      <div class="col-md-12 position-relative">
        <img :src="myurl('40', 4, 'png')" class="img-fluid" alt="" />
        <div
          class="d-flex justify-content-center position-absolute w-100"
          style="top: 85%"
        >
          <t-button @click="reload" variant="dashed" theme="success" ghost
            >刷新页面</t-button
          >
          <router-link to="/">
            <t-button variant="dashed" theme="success"
              >返回主页</t-button
            ></router-link
          >
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
const myurl = (name, e, set) => {
  const obj = new URL(`../images/newimage/${name}${e}.${set}`, import.meta.url);
  return obj.pathname;
};
const reload = () => {
location.reload();
};
</script>
