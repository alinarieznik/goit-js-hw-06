const formEl = document.querySelector('.login-form');
console.log(formEl);
const loginInputEL = formEl.querySelector('input[type="email"]');
console.log(loginInputEL);
const passwordInputEL = formEl.querySelector('input[type="password"]');
console.log(passwordInputEL);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;
    // console.log(event.currentTarget.elements);

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
         const data = {
            email: email.value,
            password: password.value,
         }
         console.log(data);

    }

    // function resetInput () {
    //     formEl.reset()
    // }
    // resetInput();

    formEl.reset();
}

// ??? to figure out why doesn't it work 
// function onFormSubmit (event) {
//      event.preventDefault();
     
//      const formData = new FormData(event.currentTarget);
//     //  console.log(formData);
     
//      formData.forEach((value, name) => {

//         if (value === "") {
//             alert("Please fill in all the fields!");
//         } else {
//             const data = {
//                 name: value, 
//             }
//             console.log(data)
//         }

//         formEl.reset();
//       });
// }
