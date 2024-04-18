import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// interface ElementPosition {
//   x: number;
//   y: number;
//   z?: number;
// }

// type GsapAnimateFunction = (elPosition: Vector3) => void;

// type AnimationFunction = () => {
//   gsapAnimate: GsapAnimateFunction;
// };

export const animationFuntion = function (
  startEl,
  elPosition,
  target,
  onUpdate
) {
  const tl = gsap.timeline({
    delay: 1,
    duration: 1,
  });
gsap.to(elPosition,{x:20 } )
  ScrollTrigger.create({
    trigger: startEl.value,
    start: "top top",
    end: "+=4600",
    scrub: true,
    pin: true,
    markers: true,
    animation: tl
      .to(elPosition, {
        x: -9.7364442617,

        y: 1.7193090615,
        z: 1.4985424552,
        duration: 2,
      })
      .to(elPosition, {
        x: -2.6263656102,

        y: -1.4710240716,
        z: 1.3222627418,
        duration: 2,
      })
      .to(elPosition, {
        x: 5.5740315863,
        y: -8.3002127818,
        z: 0.1914148691,
        duration: 2,
      })
      .to(elPosition, {
        x: 4.0305446548,
        y: -1.3615265342,
        z: -7.1437432931,
        duration: 2,
      }),
  });
};
