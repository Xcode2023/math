import { createApp,provide } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import { createI18n } from 'vue-i18n'
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";
import en from "./i18n/en";
import zh from "./i18n/zh";
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
// 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
hljs.registerLanguage('javascript', javascript);
import "@/assets/css/reset.css";
import "@/assets/css/scoll.css";
// import Aos from "aos";
// import 'aos/dist/aos.css'
import 'animate.css';
import "@/assets/css/index.css";

import "@/assets/css/responsive.css";
import "@/assets/css/style.css";

import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

import "bootstrap-icons/font/bootstrap-icons.css";


const i18n = createI18n({
    locale: 'zh',
    legacy: false,
    globalInjection: true, // 是否全局注入
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: {
      en: en,
      zh: zh 
    }
  })
  // npm config set registry https://registry.npmmirror.com
  export const thei18=i18n
const app = createApp(App);

import "@/assets/css/element.scss";
// eldark
import "@/assets/css/variable.less";
// tdcss
import "@/assets/css/tdesign.less";
import "@/assets/css/tlight.less";
// git config --global user.email "180610396@qq.com"
// git config --global user.name "Xcode2023"
app.config.globalProperties.axios = axios;
app.use(TDesign);app.use(hljsVuePlugin)
app.use(createPinia());
app.use(router);
app.use(i18n)
// app.use(Aos)
app.use(ElementPlus);
app.mount("#app");

// listen 80;
// server_name mywilson.work;
// listen 443 ssl http2;
// root /www/wwwroot/mywilson.work/;
// index index.php index.html index.htm default.php default.htm default.html;

// server_name mywilson.work;
// listen 443 ssl http2;
// root /www/wwwroot/mywilson.work/;

// location / {
//   try_files $uri $uri/ /index.html;
// }