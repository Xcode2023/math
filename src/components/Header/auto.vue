<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="🔍 Search in Content "
    @select="handleSelect"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const state = ref("");

interface LinkItem {
  value: string;
  link: string;
}

const links = ref<LinkItem[]>([]);

const loadAll = () => {
  return [
    { value: "数学快讯 📰 ", link: "/" },
    { value: "数学大家 👨‍🏫", link: "/" },
    { value: "数学著作 📚", link: "/work" },
    { value: "数学小游戏 🎮", link: "/tools" },

  ];
};

let timeout: ReturnType<typeof setTimeout>;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 2000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const handleSelect = (item: Record<string, any>) => {
  console.log(item);
  window.open(item.link);
};


onMounted(() => {
  links.value = loadAll();
});
</script>
