<template>
  <div style="height: 40px" class="bg-success-new"></div>
  <t-popup>
    <el-backtop :right="100" :bottom="100" />
    <!-- <div slot="content">触发元素是指触发浮层内容显示的元素</div> -->
    <template #content> 快速回到顶部 </template>
  </t-popup>
  <!-- <div class="bg-success-new">
    <div class="container bg-success-new">
      <div class="footer_sec tion_2">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 class="useful_text">
              <i class="bi bi-emoji-wink-fill me-1"></i
              >{{ $t("messages.about") }}
            </h2>
            <p class="dummy_text">
              {{ $t("messages.foottitle") }}
            </p>

            <div class="location_text">
              <a href="#">{{ name }}</a>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 class="useful_text">
              <i class="bi bi-egg-fried me-1"></i>{{ $t("messages.index5") }}
            </h2>
            <div class="footer_menu">
              <ul class="text-white">
                <li v-for="(x, y) in hrefs2" :key="y">
                  <div class="row"></div>
                  <router-link :to="x.to">
                    <i :class="x.icon" class="me-1"></i>
                    {{ $t("foot." + x.name) }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6 mt-sm-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 class="useful_text">
              <i class="bi bi-lightning-fill"></i>{{ $t("messages.link") }}
            </h2>
            <div class="footer_menu">
              <ul>
                <li v-for="(x, y) in hrefs" :key="y">
                  <router-link :to="x.to">
                    <i :class="x.icon" class="me-1"></i
                    >{{ $t("messages." + x.name) }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6 mt-sm-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 class="useful_text">
              <i class="bi bi-envelope-fill me-1"></i
              >{{ $t("messages.contactus") }}
            </h2>
            <div class="form-group">
              <textarea
                class="update_mail"
                placeholder="Enter Your Email will AutoSend"
                rows="5"
                id="comment"
                name="Enter Your Email"
              ></textarea>
              <div class="subscribe_bt">
                <a href="#" class="text-white"
                  ><i class="bi bi-arrow-up-circle-fill me-1"></i
                  >{{ $t("messages.gototop") }}
                  <el-backtop :right="100" :bottom="100"
                /></a>
              </div>
            </div>
            <div class="social_icon">
              <ul class="text-primary">
                <li>
                  <a href="#"
                    ><i
                      class="text-primary bi bi-facebook"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
                <li>
                  <a @click="shawWechat"
                    ><i class="text-primary bi bi-wechat" aria-hidden="true"></i
                  ></a>
                  <t-dialog draggable v-model:visible="wechat">
                    <img :src="wechatimg" class="img-fluid" alt="" />
                  </t-dialog>
                </li>
                <li>
                  <a @click="shawQQ"
                    ><i
                      class="text-primary bi bi-tencent-qq"
                      aria-hidden="true"
                    ></i
                  ></a>
                  <t-dialog draggable v-model:visible="qq">
                    <img :src="qqimg" class="img-fluid" alt="" />
                  </t-dialog>
                </li>
                <li>
                  <a @click="shawTelegram"
                    ><i
                      class="text-primary bi bi-telegram"
                      aria-hidden="true"
                    ></i
                  ></a>
                  <t-dialog draggable v-model:visible="telegram">
                    <img :src="telegramimg" class="img-fluid" alt="" />
                  </t-dialog>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { reactive, inject, ref } from "vue";

import { useI18n } from "vue-i18n";
import img1 from "@/images/qq.png";
import img2 from "@/images/wechat.png";
import img3 from "@/images/telegram.png";
const qqimg = ref(img1);
const wechatimg = ref(img2);
const telegramimg = ref(img3);
const mydata = defineProps({
  name: String,
  school: String,
  theshow: Boolean,
});

let wechat = ref(),
  qq = ref(),
  telegram = ref();
const changeLocal = (x) => {
  i18n.global.locale.value = x;
};
const shawWechat = () => {
  wechat.value = !wechat.value;
};

const shawQQ = () => {
  qq.value = !qq.value;
};

const shawTelegram = () => {
  telegram.value = !telegram.value;
};

import { useCounterStore } from "@/stores/counter.js";
const { hrefs, hrefs2 } = useCounterStore();
</script>
<style scoped>
.show {
  background: transparent;
}
</style>
