function updateSlideStyles() {
  const slides = Array.from(track.children);
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

// Atualiza os estilos ao mover
nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    moveToSlide(currentIndex + 1);
    updateSlideStyles();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    moveToSlide(currentIndex - 1);
    updateSlideStyles();
  }
});

updateSlideStyles(); // Chamar ao carregar