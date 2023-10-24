const slide = document.querySelectorAll('#slide');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

let currentSlide = 0;
const maxSlide = slide.length;

const setSlide = function () {
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
    slide[`${currentSlide}`].style.display = 'flex';
  }
};

btnLeft.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  setSlide();
});

btnRight.addEventListener('click', () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  setSlide();
});

setSlide(0);
