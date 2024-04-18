import { ref, reactive, computed, watch } from "vue";
import { defineStore,acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const hrefs = reactive([
    {

      name: "index",
      to: "/",
      icon: "bi bi-bank",
    },
    {
      name: "index1",

      to: "/new",
      icon: "bi bi-moon-fill",
    },

    {
      name: "index2",
      to: "/people",
      icon: "bi bi-chat-heart-fill",
    },
    {
      name: "index3",

      to: "/work",
      icon: "bi bi-person-add",
    },

    {
      name: "index4",

      to: "/newthree",
      icon: "bi bi-pencil-square",
    },
    {
      name: "index5",
      to: "/tools",
      icon: "bi bi-tools",
    },
  ]);

  const hrefs2 = reactive([
    {
      to: "/tools",
      name: "index1",
      icon: "bi bi-plugin",
    },
    {
      icon: "bi bi-braces-asterisk",
      to: "/tools",
      name: "index2",
    },
    {
      to: "/tools",

      icon: "bi bi-code-square",
      name: "index3",
    },
    {
      icon: "bi bi-cone-striped",
      to: "/tools",
      name: "index4",
    },
    {
      to: "/tools",

      icon: "bi bi-bug-fill",
      name: "index5",
    },
    {
      icon: "bi bi-link-45deg",
      to: "/tools",
      name: "index6",
    },
  ]);
  const hrefs3 = reactive([
    { name: "righthrefs", icon: "bi bi-people-fill", to: "/work" },
    { name: "righthrefs1", icon: "bi bi-wechat", to: "/" },
    {
      name: "righthrefs2",
      icon: "bi bi-arrow-through-heart-fill",
      to: "/test2",
    },
    { name: "righthrefs3", icon: "bi bi-virus", to: "/three" },
    { name: "righthrefs4", icon: "bi bi-rocket-fill", to: "/tools" },
    { name: "righthrefs5", icon: "bi bi-brightness-high-fill", to: "/work" },
    { name: "righthrefs6", icon: "bi bi-radioactive", to: "/test" },
  ]);
  const hrefs4 = reactive([
    { name: "righthrefs", icon: "bi bi-people-fill", to: "/work" ,indexPhoto:'',photo:[

    ]},
    { name: "righthrefs1", icon: "bi bi-wechat", to: "/" },
    {
      name: "righthrefs2",
      icon: "bi bi-arrow-through-heart-fill",
      to: "/test2",
    },
    { name: "righthrefs3", icon: "bi bi-virus", to: "/three" },
    { name: "righthrefs4", icon: "bi bi-rocket-fill", to: "/tools" },
    { name: "righthrefs5", icon: "bi bi-brightness-high-fill", to: "/work" },
    { name: "righthrefs6", icon: "bi bi-radioactive", to: "/test" },
    { name: "righthrefs6", icon: "bi bi-radioactive", to: "/test" },
  ]);
  const doubleCount = computed(() => count.value * 2);
  const color = ref(true);
  const changecolor = () => {
    color.value = !color.value;
    console.log(color.value);
  };
  let Device = ref(true);

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  if (isMobileDevice()) {
    Device.value = true;
  } else {
    Device.value = false;
    console.log(Device.value);
  }
  let startstatus = ref(true);
  let progress = ref(0);
  let pushFrequency = ref(0);
  let progressStatus = ref(true);
  
  watch(progress,() => {
    progress.value >= 100
      ? (progressStatus.value = false)
      : (progressStatus.value = true);
  });
  let math=[
    {
        "id": 1,
        "bookname": "《周髀算经》",
        "author": "不详",
        "content": "《周髀算经》原名《周髀》，算经的十书之一，是中国最古老的天文学和数学著作，约成书于公元前1世纪，主要阐明当时的盖天说和四分历法。唐初规定它为国子监明算科的教材之一，故改名《周髀算经》。",
        "create_time": "2024-04-18T08:21:34.000Z",
        "update_time": "2024-04-18T08:21:39.000Z"
    },
    {
        "id": 2,
        "bookname": "《九章算术注》",
        "author": "刘徽",
        "content": "是一部对秦代至汉代以来的传统数学思想进行总结的一部综合性著作，是以算筹作为特殊工具提出的与社会生活密切相关的数学集，按照性质分为方田、粟米、衰分、少广、商功、 均输、盈不足、方程和勾股等九个大类。据史料记载这部专著并非由一人完成，而是由多人长时间共同编辑而成。",
        "create_time": "2024-04-18T00:45:54.000Z",
        "update_time": "2024-04-18T00:45:57.000Z"
    },
    {
        "id": 3,
        "bookname": "《缀术》",
        "author": "祖冲之",
        "content": "《缀术》中记载了关于二次方程和三次方程的求解方法，这是中国数学史上关于三次方程的最早记载。《缀术》中可能包含了与方城有关的测望及行路问题，涉及相似勾股比例、勾股恒等式等。《缀术》中可能还包括了一些天文历法计算问题和度量衡问题，有的学者还认为书中研究了无穷级数。",
        "create_time": "2024-04-18T00:46:21.000Z",
        "update_time": "2024-04-18T00:46:23.000Z"
    },
    {
        "id": 4,
        "bookname": "《孙子算经》",
        "author": "孙子",
        "content": "上卷叙述度量衡制度、筹算记数和筹算乘除算法；中卷举例说明筹算分数算法、开平方和面积、体积计算；下卷是各种应用问题。",
        "create_time": "2024-04-18T00:46:56.000Z",
        "update_time": "2024-04-18T00:46:58.000Z"
    },
    {
        "id": 5,
        "bookname": "《数书九章》",
        "author": "秦九韶",
        "content": "该著作在明代后期被改名为《数书九章》。这是秦九韶唯一的数学著作，《数书九章》并不按数学方法来分类。书中的文字也不只谈数学，还涉及自然现象和社会生活，为了解当时的社会政治和经济生活提供了重要的参考文献。",
        "create_time": "2024-04-18T00:47:25.000Z",
        "update_time": "2024-04-18T00:47:27.000Z"
    },
    {
        "id": 6,
        "bookname": "《张丘建算经》",
        "author": "张丘建",
        "content": "《张丘建算经》是一部数学问题集，传本分为上、中、下三卷。卷中结尾及卷下开头均已残缺，保存下来的共有92个数学问题及其解答，其内容、范围与《九章算术》相仿，在最大公约数与最小公倍数、等差数列、不定方程等方面则超过了《九章算术》的水平。",
        "create_time": "2024-04-18T00:48:00.000Z",
        "update_time": "2024-04-18T00:48:03.000Z"
    },
    {
        "id": 7,
        "bookname": "《四元玉鉴》",
        "author": "朱世杰",
        "content": "朱世杰对“垛积术”的研究，实际上得到了高阶等差级数求和问题的普遍的解法。自宋代起我国就有了关于高阶等差级数求和问题的研究解决多元高次方程组问题是该书的最大贡献，书中另一个重大成就是系统解决高阶等差级数求和问题和高次招差法问题。",
        "create_time": "2024-04-18T00:48:37.000Z",
        "update_time": "2024-04-18T00:48:39.000Z"
    },
    {
        "id": 8,
        "bookname": "《算经十书》",
        "author": "李淳风",
        "content": "集先秦以来数学知识之大成,其算法统率应用问题的形式确立了此后中国数学著作的基本形态;它将数学分成方田、粟米、私分、少广、商功、均输、盈不足、方程、勾股9类,确立了中国古代数学的基本框架,而提出的分数四则运算、比例及比例分配算法、盈不足算法、各种面积和体积公式、解勾股形方法、开平方开立方程序、方程术即线性方程组解法以及正负数加减法则,都在世界上占有重要的或领先的地位。",
        "create_time": "2024-04-18T00:49:03.000Z",
        "update_time": "2024-04-18T00:49:05.000Z"
    },
    {
        "id": 9,
        "bookname": "《测圆海镜》",
        "author": "李冶",
        "content": "天元术起着重要的作用。在《测圆海镜》问世之前，我国虽有文字代表未知数用以布列方程和多项式的工作，但是没有留下系统的记载。李冶在《测圆海镜》中系统而概括地总结了天元术，使文词代数开始演变成符号代数。",
        "create_time": "2024-04-18T00:49:25.000Z",
        "update_time": "2024-04-18T00:49:28.000Z"
    },
    {
        "id": 10,
        "bookname": "《梦溪笔谈》",
        "author": "沈括",
        "content": "内容涉及自然科学与社会科学的广阔领域，具有极高的科学价值。其中论及文学与艺术的部分也不乏可取之见，还记录了北宋前期诗文革新运动的事迹。",
        "create_time": "2024-04-18T00:49:47.000Z",
        "update_time": "2024-04-18T00:49:50.000Z"
    },
    {
        "id": 11,
        "bookname": "《九九乘法歌诀》",
        "author": "不详",
        "content": "这是一本流传于中国古代的九九乘法口诀，用于帮助人们记忆乘法表。",
        "create_time": "2024-04-18T08:25:14.000Z",
        "update_time": "2024-04-18T08:25:17.000Z"
    },
    {
        "id": 12,
        "bookname": "《九章算术》",
        "author": "不详",
        "content": "《九章算术》是世界上最早系统叙述了分数运算的著作;其中盈不足的算法更是一项令人惊奇的创造;“方程”章还在世界数学史上首次阐述了负数及其加减运算法则。",
        "create_time": "2024-04-18T08:29:20.000Z",
        "update_time": "2024-04-18T08:29:23.000Z"
    },
    {
        "id": 13,
        "bookname": "《黄帝九章算经细草》",
        "author": "贾宪",
        "content": "宋代算书。九卷，宋贾宪撰。成书于1050年左右。南宋绍兴十八年(1148)曾有翻刻本,现已失传。据推断,该书是作者以北魏刘徽或唐李淳风的《九章算术》注本为底本而做的细草",
        "create_time": "2024-04-18T08:31:03.000Z",
        "update_time": "2024-04-18T08:31:07.000Z"
    }
]
  let loadingNumber=ref(3)
  return {
    startstatus,
    progress,
    progressStatus,
    hrefs,
    hrefs2,
    hrefs3,
    color,
    changecolor,
    Device,
    pushFrequency,hrefs4,math
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
