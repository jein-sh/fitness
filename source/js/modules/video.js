let gym = document.querySelector('.gym');
let buttonPlay = gym.querySelector('.gym__play');
let videoImage = gym.querySelector('.gym__video-img');

function onPlayerReady(event) {
  buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add('gym__play--hidden');
    videoImage.classList.add('gym__video-img--hidden');
    event.target.playVideo();
  });
}

onPlayerReady();
