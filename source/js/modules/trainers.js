let trainersContainer = document.querySelector('.trainers');
let buttonPrev = trainersContainer.querySelector('.trainers__button--prev');
let buttonNext = trainersContainer.querySelector('.trainers__button--next');
let trainersList = trainersContainer.querySelector('.trainers__list');
let trainers = trainersContainer.querySelectorAll('.trainers__item');
let step;

if (window.matchMedia('(max-width:1199px)').matches) {
  step = trainers[0].offsetWidth + 30;
} else {
  step = trainers[0].offsetWidth + 40;
}

buttonNext.addEventListener('click', function () {
  let firstTrainer = trainersList.firstElementChild;

  trainersList.style.marginLeft = '-' + step + 'px';
  trainersList.appendChild(firstTrainer.cloneNode(true));
  firstTrainer.remove();
});

buttonPrev.addEventListener('click', function () {
  let firstTrainer = trainersList.firstElementChild;
  let lastTrainer = trainersList.lastElementChild;

  trainersList.insertBefore(lastTrainer.cloneNode(true), firstTrainer);
  lastTrainer.remove();
  trainersList.style.marginLeft = '0';
});
