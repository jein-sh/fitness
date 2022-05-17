let reviewsContainer = document.querySelector('.reviews');
let buttonPrev = reviewsContainer.querySelector('.reviews__button--prev');
let buttonNext = reviewsContainer.querySelector('.reviews__button--next');
let reviewsList = reviewsContainer.querySelector('.reviews__list');

const showNextReview = () => {
  let activeEl = reviewsContainer.querySelector('.reviews__item--active');
  let nextEl = activeEl.nextElementSibling;

  if (nextEl) {
    activeEl.classList.remove('reviews__item--active');
    nextEl.classList.add('reviews__item--active');
  }
};

const showPrevReview = () => {
  let activeEl = reviewsContainer.querySelector('.reviews__item--active');
  let prevEl = activeEl.previousElementSibling;

  if (prevEl) {
    activeEl.classList.remove('reviews__item--active');
    prevEl.classList.add('reviews__item--active');
  }
};

buttonNext.addEventListener('click', showNextReview);
buttonPrev.addEventListener('click', showPrevReview);

let touchstartX = 0;
let touchendX = 0;

const handleGesture = () => {
  if (touchendX < touchstartX) {
    showPrevReview();
  }

  if (touchendX > touchstartX) {
    showNextReview();
  }
};

reviewsList.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

reviewsList.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
