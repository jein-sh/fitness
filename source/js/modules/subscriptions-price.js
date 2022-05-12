let suscriptions = document.querySelectorAll('.subscriptions__item');

suscriptions.forEach((el) => {
  const price = el.querySelector('.subscriptions__price span');

  if (price) {
    const shadowPrice = document.createElement('div');
    shadowPrice.classList.add('subscriptions__price-shadow');
    shadowPrice.textContent = price.textContent;
    el.append(shadowPrice);
  }
});
