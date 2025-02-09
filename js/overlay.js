const openButtons = document.querySelectorAll('.open-overlay');
const overlay = document.getElementById('overlay');
const iframeContent = document.getElementById('iframe-content');
const closeOverlay = document.getElementById('close-overlay');

openButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.emp-mini');
    const iframeSrc = card.dataset.iframe;

    iframeContent.src = iframeSrc;
    overlay.style.display = 'flex'; // Exibe o overlay
  });
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  iframeContent.src = ''; // Limpa o iframe para evitar recarregamentos desnecessários
});