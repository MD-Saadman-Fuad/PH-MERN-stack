const price = [2000, 1300, 3400, 6700, 5500];

function getMin(numbers){
    console.log(numbers)
    let minimum = numbers[0];
    for(let num of numbers){
        if (minimum > num){
            minimum = num;
        }
    }
    return minimum;
}

console.log(getMin(price));