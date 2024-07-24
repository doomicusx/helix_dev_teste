import { initTextAnimation } from "./mainEffect";
import { initScrollEffectMain } from "./scrollEffect";
// Função para atrasar a execução da animação de texto
function delayedTextAnimation() {
  setTimeout(initTextAnimation, 500);
  setTimeout(initScrollEffectMain, 500);
}

// Adiciona o evento DOMContentLoaded e chama as funções de inicialização
document.addEventListener("DOMContentLoaded", () => {
  delayedTextAnimation();
});
