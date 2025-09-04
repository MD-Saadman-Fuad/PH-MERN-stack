const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

const max = Math.max(...newNumbers);
console.log(max);

const first = [1, 2, 3];
const second = [...first, 4, 5, 6];
const combined = [...first, ...second];
console.log(`second: ${second}, first: ${first}, combined: ${combined}`);


const person = {name: 'John', age: 30};
const updatedPerson = {...person, job: 'developer'};
console.log(updatedPerson);

const total = (a, b, c) => a + b + c;
const result = total(...numbers);
console.log(result);