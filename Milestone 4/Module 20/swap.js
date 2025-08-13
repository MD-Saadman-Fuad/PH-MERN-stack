let a = 7;
let b = 8;
console.log(a, b)
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

[a, b] = [b, a]; //destructuring??

console.log(a, b);