const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
}

