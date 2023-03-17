function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const spanEl = bodyEl.querySelector('.color');
const buttonEl = bodyEl.querySelector('.change-color');

buttonEl.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick (event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}


