function oddAverage (numbers){
    sum = 0;
    oddArr = [];
    for (let num of numbers){
        if (num % 2 !== 0){
            sum += num;
            oddArr.push(num);
        }
    }
    const len = oddArr.length;
    const avg = sum / len;
    return [sum, avg, oddArr];
}

console.log(oddAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]))