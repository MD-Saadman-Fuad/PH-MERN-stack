const number = `23`;

if (typeof number === `number`) {
    console.log(`It's a number!`);
} else {
    console.log(`It's not a number!`);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(typeof numbers);
console.log(Array.isArray(numbers));