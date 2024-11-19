document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash; // Pega o hash da URL, como #secao-diferenciais
  
    if (hash) {
      const target = document.querySelector(hash);
  
      if (target) {
        const offset = 180; // Ajuste conforme necessário
        // Usar `setTimeout` para garantir que o navegador não faça o scroll padrão antes do ajuste
        setTimeout(() => {
          const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth' // Ou 'auto' para scroll instantâneo
          });
        }, 0);
      }
    }
  });