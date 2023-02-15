import './keyboard-listener.js';
import { removeFullScreen } from './remove-full-screen.js';

function showFullScreenImage(url) {
  const divFullScreen = document.createElement('div');
  const content = document.createElement('div');
  const img = document.createElement('img');

  img.setAttribute('src', url);

  content.classList.add('content');
  content.appendChild(img);

  divFullScreen.setAttribute('id', 'full_screen');
  divFullScreen.appendChild(content);

  document.body.appendChild(divFullScreen);

  divFullScreen.addEventListener('click', removeFullScreen);
}

function onImageClick(event) {
  const selectedImg = event.target;

  if (!selectedImg) {
    return;
  }

  const imgUrl = selectedImg.getAttribute('src');

  showFullScreenImage(imgUrl);
}

document.querySelector('.gallery').addEventListener('click', onImageClick);
