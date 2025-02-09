const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});