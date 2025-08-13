function multiply (a, b){
    if(typeof a !== Number || typeof b !== Number){
        return "Not a Number";
    }
    return a*b;
}

console.log(multiply('6', 9))

function checkArray(numbers){
    if (Array.isArray(numbers) ===false){
        return 'please provide array';
    }
    return numbers;
}

console.log(checkArray([2000, 1300, 3400, 6700, 5500]))
console.log(checkArray(1))