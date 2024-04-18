

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(Draggable)
export const animation = (myboxshadow, title, table, article) => {
    const tl = gsap.timeline({
      duration: 1,
    });
    tl.from(myboxshadow.value, {
      opacity: 0,
      y: -60,
    });
    tl.from(title.value, {
      opacity: 0,
      x: -60,
    });
    tl.from(article.value, {
      opacity: 0,
      x: -60,
    });
    tl.from(table.value, {
      opacity: 0,
      x: -60,
    });
  
  };
  