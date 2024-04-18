<template>
  <div @click="playEent" class="container">
    <div  class=" row  ">
      <div   v-for="(item, i) in songs" :key="item.id" class="item col-md-4 ">
        <div class="card  mt-sm-3 mt-md-3 p-2"
          shadow="always"
          data-aos="fade-up"
          :data-aos-delay="i * 100 + 700"
        >
          <div class="d-flex  justify-content-between align-items-center  ">
            <span>{{ item.name }}</span>
            <span class="text-right">{{ item.author }}</span>
          </div>
          <div class="d-flex mt-2 justify-content-between align-items-center">
            <el-button type="danger" ref="songid" size="default" plain :data-id="item.id">
              <span class="iconfont icon-aixin love" :data-id="item.id"></span>
              <span class="text" :data-id="item.id">
                {{ isPlayMusic(item.id) ? "暂停" : "播放" }}
              </span>
            </el-button>
            <span
              class="play-btn fs-3 text-primary iconfont"
              :class="{
                'bi bi-play': !isPlayMusic(item.id),
                'bi bi-pause': isPlayMusic(item.id),
              }"
              :data-id="item.id"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <t-dialog
  draggable  theme="info"  :onConfirm="bofang"  v-model:visible="visible">
  <div class="d-flex justify-content-center flex-column align-items-center  ">      <p>I've prepared some music🎻. Would you like to listen to it</p>
            <t-rate :default-value="2.5" allow-half color="var(--td-error-color-5)">
      <template #icon="iconProps">
        <heart-filled-icon v-bind="iconProps" />
      </template>
    </t-rate></div>
      
          </t-dialog>
</template>

<script setup>
import "@/assets/css/iconfont.css";
import music1 from "@/assets/music/把回忆拼好给你-王贰浪.mp3";
import music2 from "@/assets/music/可能-李怡然同学.flac";
import music3 from "@/assets/music/勇气大冒险-奶糖乐团.mp3";

import { ref, reactive, inject, onMounted } from "vue";
import { StarIcon, LogoGithubIcon, HeartFilledIcon } from 'tdesign-icons-vue-next';
const visible=ref(false)
const songid=ref()

const dialog=()=>{
  visible.value=!visible.value
}
     const musicState = inject("musicState");
const bofang= (e)=> {

    visible.value=!visible.value
    musicState.id = String("003");
      musicState.musicPath = songs.find((item) => {
        return item.id === musicState.id;
      }).src;
      musicState.play();

  // playEent(songid.value[3])
}

setTimeout( dialog ,1200)
    const songs = reactive([
      {
        id: "001",
        name: "把回忆拼好给你",
        src: music1,
        author: "王贰浪",
      },
      {
        id: "002",
        name: "可能",
        src: music2,
        author: "李怡然同学",
      },
      {
        id: "003",
        name: "勇气大冒险",
        src: music3,
        author: "奶糖乐团",
      },
    ])


    // 点击事件
    const playEent = (e) => {
      const dataId = e.target.getAttribute("data-id");

      if (!dataId) return;

      // 点击同一个, 暂停音乐
      if (dataId === musicState.id) {
        musicState.isPlay = false;
        musicState.id = "";
        musicState.pause();
        return;
      }
      // 点击的不是同一个, 切换音乐
      musicState.id = String(dataId);
      musicState.musicPath = songs.find((item) => {
        return item.id === musicState.id;
      }).src;
      musicState.play();
    };

    // 判断播放状态
    const isPlayMusic = (dataId) => {
      return dataId === musicState.id;
    };

    // 预加载音频
    const initMusic = () => {
      songs.forEach((item) => {
        const audio = new Audio();
        audio.src = item.src;
        audio.preload = "auto";
        audio.load();
      });
    };
    initMusic();


const alertMUSIC=() => { ElNotification({
        type: "success",
        title: "MUSIC",
        message: "播放成功🎵",
      })}
      onMounted(()=>{
        console.log(songid.value);

      } )
</script>

<style scoped>



.love {
  color: #f00;
}



</style>
