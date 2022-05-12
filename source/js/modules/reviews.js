let reviewsContainer = document.querySelector('.reviews');
let buttonPrev = reviewsContainer.querySelector('.reviews__button--prev');
let buttonNext = reviewsContainer.querySelector('.reviews__button--next');
let reviewsList = reviewsContainer.querySelector('.reviews__list');
let reviews = reviewsContainer.querySelectorAll('.reviews__item');
let step = reviews[0].offsetWidth;
let position = 0;

buttonNext.addEventListener('click', function () {
  position -= step;
  position = Math.max(position, -2 * step);
  reviewsList.style.marginLeft = position + 'px';
});

buttonPrev.addEventListener('click', function () {
  position += step;
  position = Math.min(position, 0);
  reviewsList.style.marginLeft = position + 'px';
});
