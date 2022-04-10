//const printMessage = run(addToDom('mag'), h1, echo);

//printMessage('Hello world');

// 명령형
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}

// 함수형
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (num) {
  return Math.pow(num, 2);
});

const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => Math.pow(num, 2));

console.log(array);
console.log(array2);
console.log(array3);

let counter = 0;
function increment() {
  return ++counter;
}

console.log(increment());
