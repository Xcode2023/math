import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(Draggable);
export const animation = (
  bound,
  box1,

  box3,
  box4,
  box5,
  headebox,
  parallax1,
  container,
  parallax2,
  parallax3,
  parallax4,
  parallax5,
  opacity,
  next,
  bgchange
) => {
  const draggable = new Draggable(box1.value, {
    bounds: headebox.value,
    onDragStart: function () {
      console.log("Drag started");
    },
    onDrag: function () {
      console.log("Dragging");
    },
    onDragEnd: function () {
      console.log("Drag ended");
    },
  });

  const tl = gsap.timeline({
    duration: 1,
  });
  const tl2 = gsap.timeline({
    duration: 1,
  });
  const tl3 = gsap.timeline({
    duration: 1,
  });
  tl.fromTo(
    box1.value,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
    }
  );

  tl.from(box3.value, {
    opacity: 0,
    x: -60,
  });
  tl.from(box4.value, {
    opacity: 0,
    x: -60,
  });
  tl.from(box5.value, {
    opacity: 0,
    y: -60,
    stagger: {
      from: "top",
      grid: "auto",
      amount: 1.5,
    },
  });

  ScrollTrigger.create({
    trigger: headebox.value,
    start: "-=100",
    end: "+=550",
    scrub: true,
    pin: true,
    // markers: true,
    onUpdate(e) {},
    animation: tl2
      .to(parallax1.value, {
        x: -100,

        opacity: 0,
      })
      .to(parallax2.value, {
        x: 100,
        opacity: 0,
      })
      .to(parallax3.value, {
        x: 100,
        opacity: 0,
      })
      .to(parallax4.value, {
        y: 100,

        opacity: 0,
      })
      .to(parallax5.value, {
        y: 100,

        opacity: 0,
      })

      .to(container.value, {
        y: -100,
        opacity: 0,
      })

      .fromTo(
        opacity.value,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          y: -180,
        }
      )
      .to(headebox.value, {
        opacity: 0,
      })

      .fromTo(
        next.value,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          y: -40,
          scale: 1,
        }
      ),
  });
};
export const Appanimation = (start) => {
  for (let i = 1; i < 5; i++) {
    ScrollTrigger.create({
      trigger: start.value,
      start: "-=100",
      end: "+=650",
      scrub: true,
      pin: true,
      markers: true,
      onUpdate(e) {},
      animation: gsap.fromTo(
        `#path1${i}`,
        { strokeDasharray: "0" },
        { strokeDasharray: "100%", duration: 2 }
      ),
    });
  }
};
