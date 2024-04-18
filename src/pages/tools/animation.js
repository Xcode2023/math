

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from "gsap/CSSPlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(Draggable)
export const animation = (element, bound) => {
    const draggable = new Draggable(element, {
        bounds: bound,
        onDragStart: function() {
          console.log('Drag started');
        },
        onDrag: function() {
          console.log('Dragging');
        },
        onDragEnd: function() {
          console.log('Drag ended');
        }
      });
  };
  