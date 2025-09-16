
const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // 1 2 3 4 5

const max = Math.max(...numbers);
console.log(max); // 5

const newNumbers = [0, ...numbers, 6];
console.log(newNumbers); // [0, 1, 2, 3, 4, 5, 6]