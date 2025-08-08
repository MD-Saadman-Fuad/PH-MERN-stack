function sumofEvenOnly(numbers){
    let sum = 0;
    let even_array = [];
    for(let num of numbers){
        if(num % 2 === 0){
            even_array.push(num);
            sum+=num;
        }else{
            continue;
        }
    }
    return [sum, even_array];
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const answer = sumofEvenOnly(numbers);

console.log(`The Even Array is [${answer[1]}] and the sum is ${answer[0]}`)