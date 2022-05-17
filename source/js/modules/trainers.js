let trainersContainer = document.querySelector('.trainers');
let buttonPrev = trainersContainer.querySelector('.trainers__button--prev');
let buttonNext = trainersContainer.querySelector('.trainers__button--next');
let trainers = trainersContainer.querySelectorAll('.trainers__item');
let trainersList = trainersContainer.querySelector('.trainers__list');
let slider = trainersContainer.querySelector('.trainers__slider');
let breakpointDesktop = window.matchMedia('(max-width:1199px)');
let breakpointTablet = window.matchMedia('(max-width:767px)');
let touchstartX = 0;
let touchendX = 0;
let sliderCount;

const removeClassActive = () => {
  trainers.forEach((el) => {
    if (el.classList.contains('trainers__item--active')) {
      el.classList.remove('trainers__item--active');
    }
  });
};

const addClassActive = () => {
  trainers = trainersContainer.querySelectorAll('.trainers__item');
  for (let i = 0; i < sliderCount; i++) {
    trainers[i].classList.add('trainers__item--active');
  }
};

const breakpointChecker = () => {
  removeClassActive();
  if (breakpointTablet.matches) {
    sliderCount = 1;
  } else if (breakpointDesktop.matches) {
    sliderCount = 2;
  } else {
    sliderCount = 4;
  }
  addClassActive();
};

const showPrevTrainer = () => {
  let firstTrainer = trainersList.firstElementChild;
  let lastTrainer = trainersList.lastElementChild;

  removeClassActive();
  trainersList.insertBefore(lastTrainer.cloneNode(true), firstTrainer);
  lastTrainer.remove();
  addClassActive();
};

const showNextTrainer = () => {
  let firstTrainer = trainersList.firstElementChild;

  removeClassActive();
  trainersList.appendChild(firstTrainer.cloneNode(true));
  firstTrainer.remove();
  addClassActive();
};

const handleGesture = () => {
  if (touchendX < touchstartX) {
    showNextTrainer();
  }

  if (touchendX > touchstartX) {
    showPrevTrainer();
  }
};

breakpointTablet.addListener(breakpointChecker);
breakpointDesktop.addListener(breakpointChecker);
breakpointChecker();

buttonNext.addEventListener('click', showNextTrainer);
buttonPrev.addEventListener('click', showPrevTrainer);

slider.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
