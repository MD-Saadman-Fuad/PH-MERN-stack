function counter (){
    let count = 0;
    function innerFunction(){
        console.log('Im inner function', count);
        count++;
    }
    return innerFunction;
}

const output = counter();
console.log(output());
output();
output();
output();

function counter (){
    let count = 0;
    return function(){
        count++;
        console.log('Im inner function', count);
    }
}

const innerFunc = counter();
innerFunc();
innerFunc();
innerFunc();
innerFunc();    

const check = counter();
check();
check();