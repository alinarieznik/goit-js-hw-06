const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

// const arrayEl = categoriesEl.querySelectorAll('li.item');
arrayEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});

// 2
// const array = Array.from(categoriesEl.children);
// console.log(array);
// array.forEach((item) =>{
//     console.log("Category:", item.firstElementChild.textContent);
//     console.log("Elements:", item.lastElementChild.children.length);
// });
