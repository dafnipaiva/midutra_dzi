// Configuração dos eventos no DOM
document.addEventListener("DOMContentLoaded", () => {
  /**
   * Section 2: Carrossel com loop contínuo
   * Gerencia o movimento contínuo do carrossel na seção de liberdade financeira.
   */
  const track = document.querySelector(".carousel-track");
  if (track) {
    const items = Array.from(track.children);

    // Duplica os itens do carrossel
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    const trackWidth = track.scrollWidth / 2;
    let position = 0;

    function moveCarousel() {
      position -= 1; // Ajuste incremental para velocidade
      if (position <= -trackWidth) {
        position = 0; // Reinicia o carrossel ao atingir o limite
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
  }

  /**
   * Section 3: Hover nos Cards
   * Adiciona e remove efeitos de sombra ao passar o mouse nos cards de resultados.
   */
  const cards = document.querySelectorAll(".p-6");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.5)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
    });
  });

  /**
   * Section 4: Contador fluido
   * Implementa a animação dos números exibidos nos cards.
   */
  function animateCounter(element, target, duration) {
    const start = 0;
    const increment = Math.ceil(target / (duration / 16));
    let current = start;

    function updateCounter() {
      current = Math.min(current + increment, target); // Garante que não ultrapasse o target
      element.innerText = `R$ ${current.toLocaleString("pt-BR")}`;

      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // Ativa os contadores com animação
  const counters = document.querySelectorAll("[data-target]");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    if (!isNaN(target)) {
      animateCounter(counter, target, 7000); // Ajusta a duração da animação
    }
  });

  /**
   * Section 5: Modais interativos
   * Gerencia a abertura e fechamento dos modais na estrutura do curso.
   */
  const buttons = document.querySelectorAll(".btn-toggle-content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Alterna a visibilidade da lista de aulas
        targetElement.classList.toggle("hidden");

        // Altera o texto do botão
        button.innerText = targetElement.classList.contains("hidden")
          ? "Ver Conteúdo"
          : "Esconder Conteúdo";
      } else {
        console.error(`Elemento com ID "${targetId}" não encontrado.`);
      }
    });
  });
});
