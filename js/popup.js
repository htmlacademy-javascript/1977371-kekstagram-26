import { createFotos } from './data.js';


const userDialog = document.querySelector('.big-picture');
userDialog.classList.remove('hidden');

const similarListFoto = userDialog.querySelector('.pictures');
const similarCreateFotos = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = createFotos(25);

const similarListFragment = document.createDocumentFragment();

similarFotos.forEach(({likes, comments}) => {
  const profileFoto = similarCreateFotos.cloneNode(true);
  // eslint-disable-next-line no-undef
  profileFoto.querySelector('.picture__likes').textContent = profile.likes;
  // eslint-disable-next-line no-undef
  profileFoto.querySelector('.picture__comments').textContent = profile.comments;
  similarListFoto.appendChild(profileFoto);
});

similarListFoto.appendChild(similarListFragment);
