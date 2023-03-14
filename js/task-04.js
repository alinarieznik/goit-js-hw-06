const counterEl = document.querySelector('#counter');
const decrementEl = counterEl.querySelector('button[data-action="decrement"]');
const incrementEl = counterEl.querySelector('button[data-action="increment"]');
let valueEl = incrementEl.previousElementSibling;

const createCounter = () => {
    let counterValue = 0;
    decrementEl.addEventListener('click', event => {
        counterValue -= 1;
        valueEl.textContent = counterValue;
    });
    incrementEl.addEventListener('click', event => {
        counterValue += 1;
        valueEl.textContent = counterValue;
    });
};

createCounter();



