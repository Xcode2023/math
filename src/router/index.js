import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/pages/Index/index.vue";
import Three from "@/pages/three/index.vue";
import Tools from "@/pages/work/index.vue";
import Test from "@/pages/test/index.vue";
import Test2 from "@/pages/test/test.vue";
import Work from "@/pages/work/index2.vue";

import NEW from "@/pages/new.vue";
import Liuyan from '@/pages/liuyan.vue'
import Odwr from '@/pages/Odwr/odwr.vue'
import Template from '@/pages/templates/template.vue'
import Echarts from '@/pages/Echarts/Echarts.vue'
import NotFind from '@/components/notfind.vue'
import { useCounterStore } from "@/stores/counter.js";
import THREE from '@/pages/three/index.vue'
import NEWTHREE from '@/pages/luntan.vue'

const routes = [
  {
    path: "/",

    component: Home,
  },

  {
    path: "/three",

    component: Three,
  },

  {
    path: "/new",
    component: NEW,
  },

  {
    path: "/tools",
    component: Tools,
  },
  {
    path: "/people",
    component: Liuyan,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/test2",
    component: Test2,
  },
  {
    path: "/work",
    component: Work,
  },

  {
    path: "/three",
    component: THREE,
  },
  {
    path: "/newthree",
    component: NEWTHREE,
  },
  {
    path: "/echarts",
    component: Echarts,
  },
  {
    path: "/template/:type",
    component: Template,
    props: true,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFind,

  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPostion) {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {


  const st = useCounterStore();

  st.pushFrequency+=1
  st.progressStatus=true
  console.log('st.progressStatus',st.progressStatus);

  next();
});

router.afterEach((to, from) => {


console.log(to,from);

});
export default router;
