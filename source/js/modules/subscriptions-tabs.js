const subscriptionsTabs = document.querySelectorAll('.subscriptions__tab');
const subscriptionsLists = document.querySelectorAll('.subscriptions__list');

subscriptionsTabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    let currentTab = tab;
    let tabId = currentTab.getAttribute('data-tab');
    let currentList = document.querySelector(tabId);

    subscriptionsTabs.forEach((el) => {
      el.classList.remove('subscriptions__tab--active');
    });

    subscriptionsLists.forEach((list) => {
      list.classList.remove('subscriptions__list--active');
    });

    currentTab.classList.add('subscriptions__tab--active');
    currentList.classList.add('subscriptions__list--active');
  });
});
