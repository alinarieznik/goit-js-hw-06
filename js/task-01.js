const categoriesEl = document.querySelector('#categories');
console.log("Number of categories:", categoriesEl.children.length);

const arrayEl = categoriesEl.querySelectorAll('li.item');
arrayEl.forEach((item) =>{
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
});

// question why it does not work
// const array = categoriesEl.children;
// console.log(array);
// array.forEach((item) =>{
//     console.log("Category:", item.firstElementChild.textContent);
//     console.log("Elements:", item.lastElementChild.children.length);
// });