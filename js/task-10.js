const numberInput = document.querySelector('#controls input');
console.log(numberInput);
const buttonCreateEl = numberInput.nextElementSibling;
console.log(buttonCreateEl);
const buttonDestroyEl = buttonCreateEl.nextElementSibling;
console.log(buttonDestroyEl);
const boxesContainer = document.querySelector('#boxes');
console.log(boxesContainer);

buttonCreateEl.addEventListener('click', () => createBoxes(Number(numberInput.value)));
buttonDestroyEl.addEventListener('click', () => destroy(Number(numberInput.value)));

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    newDiv.style.background = getRandomHexColor();
    size += 10;
    boxesContainer.appendChild(newDiv);
  }
  console.log(amount);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroy() {
  boxesContainer.innerHTML = '';
}
