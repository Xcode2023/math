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
  OrbitControls3,
  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";

// console.log(OrbitControls3);

// import * as dat from "dat.gui";

// let position, target;
// const gui = new dat.GUI();

export async function setupViewer(el, modulePath, hdrPath) {
  // Initialize the viewers
  const viewer = new ViewerApp({
    canvas: el,
  });

  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const camera = viewer.scene.activeCamera;
  // console.log(camera);

  camera.interactionsEnabled = true;
  camera.setCameraOptions({
    // controlsMode:'firstPerson',
  });
  // console.log(camera.setCameraOptions);


  // setTimeout(() => {
  //   console.log(position.x, target);
  // }, 4000);
  // Add a popup(in HTML) with download progress when any asset is downloading.
  await viewer.addPlugin(AssetManagerBasicPopupPlugin);


  await viewer.addPlugin(GBufferPlugin);
  await viewer.addPlugin(new ProgressivePlugin(32));
  await viewer.addPlugin(new TonemapPlugin());
  await viewer.addPlugin(GammaCorrectionPlugin);
  await viewer.addPlugin(SSRPlugin);
  await viewer.addPlugin(SSAOPlugin);
  await viewer.addPlugin(DiamondPlugin);
  await viewer.addPlugin(FrameFadePlugin);
  await viewer.addPlugin(GLTFAnimationPlugin);
  await viewer.addPlugin(GroundPlugin);
  await viewer.addPlugin(BloomPlugin);
  await viewer.addPlugin(TemporalAAPlugin);
  await viewer.addPlugin(AnisotropyPlugin);
  // and many more...

  // or use this to add all main ones at once.
  // await addBasePlugins(viewer);

  // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
  await viewer.addPlugin(CanvasSnipperPlugin);

  // This must be called once after all plugins are added.
  viewer.renderer.refreshPipeline();

  // Import and add a GLB file.

  await viewer.load(modulePath);
  // await viewer.load("public/free_iphone_13_pro_2021/scene.gltf");
  // controlle1.add(position, "y").min(-10).max(10).step(0.01);
  // controlle1.add(position, "x").min(-10).max(10).step(0.01);
  // controlle1.add(position, "z").min(-10).max(10).step(0.01);

  viewer.addEventListener("preFrame", () => {
    camera.positionUpdated(true);
  });

  viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
  viewer.getPlugin(TonemapPlugin).config.tonemapBackground = false;
  viewer.getPlugin(TonemapPlugin).config.renderDepth = false;
  // Load an environment map if not set in the glb file
  await viewer.setEnvironmentMap(
    await manager.importer.importSinglePath(hdrPath)
  );
  // console.log("the camera", camera);
  // console.log('the camera',camera);
  // const ob = new OrbitControls3(camera, el);
  // ob.autoRotate = true;
  const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin);
  uiPlugin.setupPlugins(TonemapPlugin, CanvasSnipperPlugin);

}
