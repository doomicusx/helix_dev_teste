import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initScrollEffectMain() {
  gsap.registerPlugin(ScrollTrigger);
}
