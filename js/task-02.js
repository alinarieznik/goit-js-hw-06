const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1 option 
// const listEl = document.querySelector('#ingredients');
// const makeList = options => {

//   const items = [];
//   options.forEach(item => {
//     const itemsEl = document.createElement('li');
//     itemsEl.classList.add('item');
//     itemsEl.textContent = `${item}`;
//     items.push(itemsEl);
//   });

//   return items;
// }

// const elements = makeList(ingredients);
// listEl.append(...elements);


// 2 option
const listEl = document.querySelector('#ingredients');
const makeList = options => {
  return options.map(item => {
    const itemsEl = document.createElement('li');
    itemsEl.classList.add('item');
    itemsEl.textContent = `${item}`;
    // console.log(itemsEl);
    return itemsEl;
  });
}

const items = makeList(ingredients);
listEl.append(...items);


// questions about foreach, differences with map during working process