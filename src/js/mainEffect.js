import Splitting from "splitting";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function initTextAnimation() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  Splitting({ target: "#tituloMain", by: "chars" });
  Splitting({ target: "#descricaoMain", by: "lines" });

  const itensHeader = document.querySelectorAll(".headerAnima");
  const itensButtons = document.querySelectorAll(".buttonsMainAnima");

  const animationConfig = {
    tituloMain: {
      duration: 0.9,
      stagger: 0.009,
      autoAlpha: 0,
      yPercent: 100,
      ease: "power2.out",
    },
    descricaoMain: {
      duration: 0.9,
      stagger: 0.009,
      autoAlpha: 0,
      yPercent: 100,
      ease: "sine.out",
    },
    buttons: {
      duration: 0.5,
      stagger: 0.1,
      autoAlpha: 0,
      ease: "power2.inOut",
    },
    header: {
      duration: 0.3,
      stagger: 0.1,
      autoAlpha: 0,
      ease: "power2.in",
    },
  };

  let tl = gsap.timeline();
  // Animação Main
  tl.from("#main", {
    duration: 1.31,
    scale: 0.95,
    ease: "power2.out",
  })
    .from("#tituloMain .char", animationConfig.tituloMain, "<")
    .from("#descricaoMain .word", animationConfig.descricaoMain, "<0.8")
    .from(itensButtons, animationConfig.buttons, "<0.3")
    .from(itensHeader, animationConfig.header, "<0.5");
}

const elements = gsap.utils.toArray([".AnimaScrollMain"]);
const elementsNumeros = gsap.utils.toArray([".tatu3"]);
console.log(elementsNumeros);
gsap.registerPlugin(ScrollTrigger);
Splitting({ target: "#tatu", by: "chars" });
Splitting({ target: "#tatu2", by: "chars" });
Splitting({ target: "#tatu3", by: "chars" });

ScrollTrigger.create({
  animation: gsap
    .timeline()

    .to(elements, {
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.09,
      ease: "power2.in",
      height: 0,
      display: "none",
    })

    .from(".leao", {
      autoAlpha: 0,
      display: "none",
    })
    .from("#tatu .char, #tatu, #parceiros", {
      display: "none",
      duration: 1,
      stagger: 0.002,
      autoAlpha: 0,
      yPercent: 100,
      ease: "power2.out",
    })
    .to(".leao", {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.09,
      ease: "power2.out",
      height: 0,
    })
    .from(".leao2", {
      autoAlpha: 0,
      display: "none",
    })
    .from("#tatu2 .char, #tatu2", {
      display: "none",
      duration: 1.5,
      stagger: 0.002,
      autoAlpha: 0,
      yPercent: 100,
      ease: "power2.out",
    })
    .to(".leao2", {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      height: 0,
    })
    .from(".leao3", {
      autoAlpha: 0,
      display: "none",
    })
    .from(".tatu3 .char, .tatu3", {
      display: "none",
      duration: 1.5,
      stagger: 0.002,
      autoAlpha: 0,
      yPercent: 100,
      ease: "power2.out",
    })
    .to(".leao3", {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      height: 0,
    }),
  trigger: "#scrollEffect",
  start: "center center",
  end: "5000px bottom",
  scrub: 0.5,
  markers: true,
  pin: true,
});

// Adicionar Will Change

const addWillChange = (el, prop) => {
  el.forEach((element) => {
    element.style.willChange = prop;
  });
};

const tituloChars = document.querySelectorAll("#tituloMain .char");
const descricaoWords = document.querySelectorAll("#descricaoMain .word");
addWillChange(tituloChars, "opacity, transform");
addWillChange(descricaoWords, "opacity, transform");
