let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const goToSlide = (n) => {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
};

const changeSlide = (direction) => goToSlide(currentSlide + direction);

// Auto advance every 5 seconds
setInterval(() => changeSlide(1), 5000);