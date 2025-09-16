

const sum = (...rest) =>{
    console.log(rest);
    let sum = 0;
    for (const num of rest){
        sum+=num;
    }
    return sum;
}
console.log(sum(1, 2 , 3, 4, 5)); // 15