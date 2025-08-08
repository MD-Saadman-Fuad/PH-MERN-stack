function sumofNumbers(number){
    let sum = 0;
    for (let i of number){
        sum+=i;
    }
    return sum
}
const nums = [1, 2, 3, 4, 5, 7, 8]
const sum = sumofNumbers(nums);
console.log(sum)