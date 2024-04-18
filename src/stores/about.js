import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAboutStore = defineStore("aboutcounter", () => {
  let bookArray = [
    ,
    "《九九乘法歌诀》",
    "《周髀算经》",
    "《九章算术》",
    "《九章算术注》",
    "《缀术》",
    "《孙子算经》",
    "《数书九章》",
    "《几何原本》",
    "《张丘建算经》",
    "《四元玉鉴》",
    "《算经十书》",
    "《测圆海镜》",
    "《梦溪笔谈》",
    "《几何原本》",
  ];
  return {bookArray};
});
