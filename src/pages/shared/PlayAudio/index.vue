<template>
  <audio ref="music" class="video" :src="musicPath">1</audio>
</template>

<script setup>
import { inject, ref, nextTick } from "vue";
 
    let musicState = inject("musicState");
    let musicPath = ref("");
    let music = ref(null);

    // 播放音乐
    function play() {
      musicPath.value = musicState.musicPath;
      nextTick(() => {
        music.value
          .play()
          .then((res) => {
            musicState.isPlay = true;
            ElNotification({
              type: "success",
              title: "MUSIC",
              message: "播放成功🎵",
            });
          })
          .catch((err) => {
            console.log(err);
            ElNotification({
              type: "error",
              title: "ERROR",
              message: "音频资源未加载完毕, 请等待!",
            });
          });
      });
    }

    // 暂停音乐
    function pause() {
      music.value.pause();
      ElNotification({
        type: "warning",
        title: "PAUSE",
        message: "音频资源暂停播放",
      });
    }

    musicState.play = play;
    musicState.pause = pause;
    musicPath.value = musicState.musicPath;

</script>

<style scoped>
.video {
  display: none;
}
</style>
