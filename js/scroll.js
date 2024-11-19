document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href');

    // Permitir navegação se o link for externo ou para outra página
    if (href && (href.includes('.html') || href.includes('http'))) {
      return; // Deixe o navegador seguir o link
    }

    // Caso contrário, implemente scroll suave com ajuste
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 180; // Ajuste conforme necessário
      const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      // Scroll com ajuste
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  });
});