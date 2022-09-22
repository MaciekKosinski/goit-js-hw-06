function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('mousedown', randomColor);

function randomColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};
