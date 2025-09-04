function sum (num1, num2=0){
    const total = num1 + num2;
    console.log(total);
}

sum(5, 10);
sum(5);

function multiply (num1=1, num2=1){
    const total = num1 * num2;
    console.log(total);
}

multiply(5, 10);
multiply(5);
multiply();