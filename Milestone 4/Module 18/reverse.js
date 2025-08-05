const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = numbers.length-1; i>=0; i--){
    console.log(numbers[i]);
}
let reverse=[]
for(let i = numbers.length-1; i>=0; i--){
    reverse.push(numbers[i])
}

console.log(reverse)
////////////////////////////
let reversed = [];

for(let num of numbers){
    reversed.unshift(num);
}
/////////////////////////////
console.log(reversed)
/////////////////////////////
console.log(numbers.reverse())