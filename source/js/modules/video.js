let gym = document.querySelector('.gym');
let video = gym.querySelector('.gym__video');
let buttonPlay = gym.querySelector('.gym__play');
let videoImage = gym.querySelector('.gym__video-img');

const addVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/d84pzFJz6RY?start=45?autoplay=1&enable_js=1';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  video.appendChild(iframe);
};

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('gym__play--hidden');
  videoImage.classList.add('gym__video-img--hidden');
  addVideo();
});
