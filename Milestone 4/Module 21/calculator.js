

function addition(a, b){
    return a+b;
}

function substraction(a, b){
    return a-b;
}

function multiply (a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function newCalculator(a, b, operation){
    let result = 0;
    if(operation === 'addition'){
        result = addition(a, b)
    }else if(operation === 'substraction'){
        result = substraction(a, b);
    }else if(operation === 'multiply'){
        result = multiply(a, b);
    }else if(operation === 'divide'){
        result = divide(a, b);
    }else{
        return 'Not a valid Operation';
    }
    return result;
}

console.log(newCalculator(6, 3, 'addition'));
console.log(newCalculator(6, 3, 'substraction'));
console.log(newCalculator(6, 3, 'multiply'));
console.log(newCalculator(6, 3, 'divide'));
console.log(newCalculator(6, 3, 'x'));
