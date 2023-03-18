
// to figure out how to do it
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const mainDivEl = document.querySelector("#controls");
// console.log(mainDivEl);
// const inputEl = mainDivEl.firstElementChild;
// console.log(inputEl);
// const buttonDestroyEl = mainDivEl.lastElementChild;
// console.log(buttonDestroyEl);
// const buttonCreateEl = buttonDestroyEl.previousElementSibling;
// console.log(buttonCreateEl);
// const boxesEl = document.querySelector("#boxes");
// console.log(boxesEl);


// let createdBoxes = [];

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i +=1) {
//     const boxEl = document.createElement('div');
//     console.log(boxEl);
//     const basicSize = 30;
//     let boxSize = basicSize + i * 10;
//     boxEl.style.width = `${boxSize}px`;
//     boxEl.style.height = `${boxSize}px`;
//     boxEl.style.backgroundColor = getRandomHexColor();
//     createdBoxes.push(boxEl);
//     console.log(createdBoxes);

//   }
//   boxesEl.append(...createdBoxes);
// }

// function getAmount() {
//   const amount = Number(inputEl.value);
//   console.log(amount);
//   createBoxes(amount);
// }

// getAmount();


