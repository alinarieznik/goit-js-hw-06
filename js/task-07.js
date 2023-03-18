const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);
spanEl.style.fontSize = inputEl.style.fontSize;

spanEl.style.fontSize = `${inputEl.value}px`;

function onInputChange (event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
};