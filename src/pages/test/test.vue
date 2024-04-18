<template>
  <section id="view1" class="section">
    <div class="hero--container">
      <div class="hero--content">
        <h1>WebGL</h1>
        <p>
          This page uses a new generation of webgl technology including 3d model
          operation, if you feel that Caton is very sorry to give you a bad
          experience, please leave a message to ✉️ 👉ODWR
        </p>
        <button tabindex="-1" class="button button-know-more" @click="scrollto">
          Know more
        </button>
      </div>
    </div>
  </section>

  <section id="view2" class="section">
    <div class="performance--container">
      <div class="performance--content"></div>
    </div>
  </section>

  <section id="view3" ref="el1" class="section">
    <div class="power--container">
      <div class="power--content">
        <h2><i class="bi bi-tencent-qq"></i>Tencent chat</h2>
        <h1>QQ</h1>
        <p>
          More than 90% of mobile Internet services are widely used Multi-person
          video and multi-end file transmission, continuous innovation to meet
          the needs of communication, is committed to creating an infinite joy
          of communication, entertainment and life experience
        </p>
      </div>
      <div class="power--features--img">
        <img
          :src="qqimg"
          class="img-fluid shadow-lg rounded-5"
          style="width: 300px"
        />
      </div>
    </div>
  </section>

  <div class="section">
    <div class="autofocus--container">
      <div class="autofocus--content">
        <h1>Struggle makes everything <strong>hopeful</strong></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eligendi nobis odio omnis, eius ullam rem blanditiis dolores officia
          quasi provident? Eius vel accusamus reiciendis aliquid incidunt
          voluptatum quasi temporibus?
        </p>
      </div>
    </div>
  </div>

  <section id="view4" class="section explore">
    <div class="power--container">
      <div class="power--content">
        <h2><i class="bi bi-telegram"></i>Telegram chat</h2>
        <h1>Telegram</h1>
        <p>
          Telegram claims to be the most "free and secure" communication
          software, which enables user anonymity in communications, end-to-end
          encryption of messages, and periodic destruction of chat messages
        </p>
      </div>
      <div class="power--features--img">
        <img
          :src="telegramimg"
          class="img-fluid shadow-lg rounded-5"
          style="width: 300px"
        />
      </div>
    </div>
  </section>
  <section id="view5" class="section explore">
    <div class="power--features--img">
      <img
        :src="wechatimg"
        class="img-fluid shadow-lg rounded-5"
        style="width: 300px"
      />
    </div>
    <div class="power--container">
      <div class="power--content">
        <h2><i class="bi bi-wechat"></i>Tencent wechat</h2>
        <h1>weChat</h1>
        <p>
          Wechat is a mobile phone chat software launched by Tencent on January
          21, 2011, which can quickly send voice messages, videos, pictures and
          text through the network and support multi-group chat
        </p>
      </div>
    </div>
  </section>
  <section class="section explore" id="view6">
    <div class="power--container">
      <div class="power--content">
        <h2><i class="bi bi-telegram"></i>Telegram chat</h2>
        <h1>Telegram</h1>
        <p>
          Telegram claims to be the most "free and secure" communication
          software, which enables user anonymity in communications, end-to-end
          encryption of messages, and periodic destruction of chat messages
        </p>
      </div>
      <div class="power--features--img">
        <img
          :src="telegramimg"
          class="img-fluid shadow-lg rounded-5"
          style="width: 300px"
        />
      </div>
    </div>
  </section>
  <section class="box" id="view7">
    <section class="position-relative z-1"></section>
  </section>
  <section class="box" id="view8">
    <section class="position-relative z-1"></section>
  </section>
  <section class="box" id="view9">
    <section
      class="position-relative z-1 justify-content-center d-flex flex-column"
    >
      <div class="row">
        <div class="col-md-4"></div>
        <div
          class="col-md-4 d-flex justify-content-center align-items-center"
          style="margin-top: 24rem"
        >
          <p class="text-center fs-2 lh-lg">
            🎁 Share this site with your friends🍓👉
          </p>
        </div>
        <img
          :src="qr"
          class="col-md-4 shadow-lg rounded-5"
          style="width: 300px; margin-top: 24rem"
          alt=""
        />
      </div>
    </section>
  </section>
  <section class="box" id="view10">
    <section class="position-relative z-1">
      <FOOT :theshow="true" school="江西科技师范大学" name="ODWR"></FOOT>

      <h2 class="text-center" style="font-size: 4rem; margin-top: 24rem">
        Thank You
      </h2>
    </section>
  </section>

  <div class="exit--container">
    <button class="button--secondary button--body">View body only</button>
    <button class="button--secondary button--exit">Exit</button>
  </div>

  <div ref="webgiCanvasContainer" id="webgi-canvas-container">
    <canvas ref="webgiCanvas" id="webgi-canvas"></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useElementBounding } from "@vueuse/core";
const el1 = ref(null);
const { x, y, top, right, bottom, left, width, height } =
  useElementBounding(el1);
console.log(x, y, top, right, bottom, left, width, height);

const scrollto = () => {
  window.scrollTo({
    top: y.value,
  });
};
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  timeout,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  DiamondPlugin,
  FrameFadePlugin,
  GLTFAnimationPlugin,
  GroundPlugin,
  BloomPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  ScrollableCameraViewPlugin,
  OrbitControls3,
  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";
import img1 from "@/images/qq.png";
import webqr from "@/images/webqr.png";
import img2 from "@/images/wechat.png";
import img3 from "@/images/telegram.png";
import FOOT from "@/components/foot.vue";

const qqimg = ref(img1);
const wechatimg = ref(img2);
const qr = ref(webqr);
const telegramimg = ref(img3);
import module3D from "@/assets/sky2.glb";
// import module3D from "@/assets/cameraScroll.glb";
const path = ref(module3D);
const webgiCanvasContainer = ref();
const webgiCanvas = ref();
onMounted(async () => {
  await newview();
  setTimeout(() => {
    window.location.reload();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 2500);
});

const newview = async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: webgiCanvas.value,
  });
  let scroller;
  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  scroller = await viewer.addPlugin(ScrollableCameraViewPlugin);

  // Add all the plugins at once
  await addBasePlugins(viewer);

  // This must be called after adding any plugin that changes the render pipeline.
  viewer.renderer.refreshPipeline();

  // Load a 3d model.
  await manager.addFromPath(path.value);
  // await viewer.load(path)
  const exploreView = document.querySelector(".explore");
  const canvasView = document.getElementById("webgi-canvas");
  const canvasContainer = webgiCanvasContainer.value;
  const header = document.querySelector(".header");
  const exitContainer = document.querySelector(".exit--container");
  const bodyButton = document.querySelector(".button--body");

  // EXPLORE ALL FEATURES EVENT
  document.querySelector(".button-explore")?.addEventListener("click", () => {
    exploreView.style.pointerEvents = "none";
    exitContainer.style.opacity = "100";
    exitContainer.style.display = "flex";
    canvasView.style.pointerEvents = "all";
    canvasContainer.style.zIndex = "1";
    header.style.position = "fixed";
    document.body.style.overflowY = "hidden";
    document.body.style.cursor = "grab";
    scroller.enabled = false;
    let cameraViews = viewer.getPlugin(CameraViewPlugin);
    cameraViews?.animateToView(cameraViews.camViews[4]);
  });

  document.querySelector(".button--exit")?.addEventListener("click", () => {
    exploreView.style.pointerEvents = "all";
    canvasView.style.pointerEvents = "none";
    canvasContainer.style.zIndex = "unset";
    document.body.style.overflowY = "auto";
    exitContainer.style.display = "none";
    header.style.position = "absolute";
    scroller.enabled = true;
  });

  const lensObjectNames = [
    "Circle002",
    "+Sphere001001",
    "new",
    "+Plane008001",
    "+SideButtons001",
    "Rings2001",
    "+Rings1001",
    "+Circle003001",
    "+Sphere003001",
    "+Circle001001",
    "Text001",
    "Plane006001",
    "+Plane005001",
    "+Sphere001",
    "+Cylinder001",
    "+BODY044001",
  ];

  const lensObjects = [];
  for (const obj of lensObjectNames) {
    const o = viewer.scene.findObjectsByName(obj)[0];
    o.userData.__startPos = o.position.z;
    o.userData.__deltaPos = -Math.pow(Math.abs(o.position.z) * 1.5, 1.25);

    lensObjects.push(o);
  }

  let lensOnly = false;
  bodyButton.addEventListener("click", () => {
    if (lensOnly) {
      setLensAppearance(true);
      lensOnly = false;
      bodyButton.innerHTML = "view body only";
    } else {
      setLensAppearance(false);
      lensOnly = true;
      bodyButton.innerHTML = "view with lens";
    }
  });

  function setLensAppearance(_value) {
    for (const o of lensObjects) {
      o.visible = _value;
    }
    viewer.scene.setDirty({ sceneUpdate: true });
  }

  document.querySelector(".button-know-more")?.addEventListener("click", () => {
    const element = document.querySelector("#view2");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  });
};
</script>
<style scoped>
#webgi-canvas {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  touch-action: none;
  /* pointer-events: none; */
}

#webgi-canvas-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
}

/* LOADER */
.loader {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #e1dedf;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  font-size: 12px;
}

.progress {
  position: absolute;
  top: 60%;
  width: 50%;
  height: 1px;
  background: var(--primarycolor);
  transform: scaleX(0);
  transition: transform 1s;
  transform-origin: left;
  z-index: 10;
  margin: 0 5%;
}

/* HEADER SECTION */
.header {
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
}

.header--container {
  display: flex;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.header--brand {
  width: 140px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header--menu {
  display: inline-flex;
  gap: 1em;
  align-items: center;
}

.header--menu li {
  padding: 10px 30px;
  color: black;
  transition: all 0.6s ease-in-out;
  border-radius: 50px;
  pointer-events: all;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header--menu li:hover {
  padding: 10px 30px;
  background: black;
  color: white;
  cursor: pointer;
}

/* HERO SECTION */
.box {
  height: 100vh;
  background: transparent;
}
.section {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100vh;
  align-content: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  scroll-snap-align: start;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hero--container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
}

.hero--content {
  width: 320px;
  position: absolute;
  margin-left: 10%;
}

h1 {
  position: relative;
  left: -12px;
  width: 280px;
  height: 76px;
  font-style: normal;
  font-weight: 700;
  font-size: 184px;
  line-height: 76px;
  letter-spacing: -0.01em;
  color: #181818;
  margin-bottom: 60px;
}

.hero--content > h2 {
  text-align: right;
  margin-right: 56px;
  margin-bottom: 9px;
  font-weight: 500;
  font-size: 17px;
}

.hero--content > p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.04em;
  margin-bottom: 30px;
}

.button {
  width: 194px;
  height: 60px;
  left: 134px;
  top: 447px;
  border: none;
  background-image: linear-gradient(9deg, #0f2dd4, #ff9090);
  border-radius: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 10px;
  transition: all 0.8s ease-in-out;
  background-position: 0 -30px;
  background-size: 100% 90px;
  background-repeat: repeat-x repeat-y;
}

.button:hover {
  background-image: linear-gradient(9deg, #1933c8, #ff9090);
  box-shadow: 0px 6px 20px #160fd5c3;
  transform: translateY(-3px);
  cursor: pointer;
  background-position: 0 0;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.hero--scroller--container {
  bottom: 0;
  align-items: center;
  width: 170px;
  align-content: center;
  flex-direction: column;
  position: absolute;
  text-align: center;
  line-height: 3.2em;
  color: grey;
  overflow: hidden;
}

/* PERFORMANCE SECTION */

.performance--container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
}

.performance--content {
  width: 320px;
  position: absolute;
  margin-right: 10%;
  /*   opacity: 0; */
}

.performance--content p {
  line-height: 22px;
}

.performance--container.fixed {
  position: fixed;
  top: 50%;
}

.performance--content > h1 {
  position: relative;
  left: -4px;
  font-style: normal;
  font-weight: 700;
  font-size: 85px;
  line-height: 55px;
  letter-spacing: -0.01em;
  color: #be1921;
  margin-bottom: 60px;
  word-break: break-all;
}

.performance--content > h2 {
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 17px;
}

.performance--content > img {
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 10px;
}

/* POWER SECTION */

.power--container {
  display: flex;
  width: 80%;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.power--content {
  width: 400px;
}

.power--content > h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 125px;
  line-height: 55px;
  letter-spacing: -0.01em;
  color: var(--primarycolor);
  margin-top: 32px;
  margin-bottom: 24px;
}

.power--content > p {
  line-height: 22px;
}

.power--img {
  position: relative;
  top: -340px;
}

.power--features--img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
}

/* AUTOFOCUS SECTION */

.autofocus--container {
  display: flex;
  align-content: flex-end;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.autofocus--content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.autofocus--content p {
  width: 70%;
  text-align: center;
  line-height: 22px;
}

.autofocus--content > h1 {
  font-style: normal;
  font-weight: 100;
  font-size: 85px;
  text-align: center;
  line-height: 55px;
  letter-spacing: -0.01em;
  /* margin-top: 32px; */
  margin-bottom: 24px;
  width: 100%;
}

.autofocus--content > h1 strong {
  font-weight: 700;
  color: #1f2bd2;
}

.autofocus--img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
}

/* EXPLORE SECTION */

.explore--container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-content: flex-end;
  flex-direction: column;
  width: 100%;
}

.explore--content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10%;
}

.explore--content p {
  width: 70%;
  text-align: center;
  line-height: 22px;
}

.explore--content > h1 {
  font-style: normal;
  font-weight: 100;
  font-size: 85px;
  text-align: center;
  line-height: 75px;
  letter-spacing: -0.01em;
  /* margin-top: 32px; */
  margin-bottom: 94px;
  width: 100%;
  width: 400px;
  text-align: right;
}

.explore--content > h1 strong {
  font-weight: 700;
  color: #0d43b6;
}

.exit--container {
  display: none;
  width: 100%;
  height: 100%;
  align-content: center;
  bottom: 60px;
  align-items: flex-end;
  position: fixed;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
}

.button--secondary {
  border-radius: 58px;
  font-weight: 700;
  font-size: 10px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #3d3d3d;
  transition: all 0.4s ease-in-out;
  background-repeat: repeat-x repeat-y;
  z-index: 2;
  padding: 10px 30px;
  border: 1px solid black;
  text-transform: uppercase;
  pointer-events: auto;
  margin-right: 10px;
}

.button--secondary:hover {
  cursor: pointer;
  color: #ffffff;
  background-color: #181818;
  pointer-events: auto;
}

/* MOBILE ADJUSTMENTS */
@media (max-width: 600px) {
  .hero--scroller--text {
    display: none;
  }

  .header--menu {
    display: none;
  }

  .header--container {
    justify-content: center;
  }

  .hero--container {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100% !important;
  }

  .hero--content {
    width: 100%;
    margin-left: 0;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    /* opacity: 0; */
  }

  h1 {
    left: unset;
    width: unset;
    height: unset;
    font-size: 7em;
    line-height: 1em;
    letter-spacing: -0.01em;
    margin-bottom: 30vh;
    margin-top: -10px;
    position: relative;
  }

  .hero--content > h2 {
    text-align: center;
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 1em;
    margin-right: 0;
    margin-top: 40px;
  }

  .hero--content > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.04em;
    margin-bottom: 30px;
    width: 85%;
    text-align: center;
  }

  .performance--container {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .performance--content {
    width: 320px;
    position: absolute;
    margin-right: 0;
    opacity: 0;
    margin-top: 20%;
    text-align: center;
  }

  .performance--content p {
    display: none;
  }

  .performance--content img {
    display: none;
  }

  .performance--content svg {
    margin-top: 50vh;
  }

  .power--content {
    margin-top: 100vh;
  }

  .power--content p {
    width: 85%;
  }

  .power--content h1 {
    font-size: 6em;
  }

  .power--container {
    display: flex;
    width: 80%;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-around;
  }

  .power--features--img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2%;
  }

  .power--features--img img {
    width: auto;
    height: 220px;
  }

  .autofocus--content h1 {
    font-size: em;
    line-height: 1em;
    margin-bottom: 60vh;
  }

  .autofocus--content {
    margin-top: 30px;
  }

  .explore--container {
    align-items: center;
    align-content: flex-end;
    justify-content: flex-end;
  }

  .explore--content {
    align-items: center;
    margin-right: 0;
    margin-bottom: 40px;
  }

  .explore--content h1 {
    text-align: center;
    font-size: 3em;
    line-height: 1em;
    margin-bottom: 40px;
  }
}
</style>
