

function hello(){
    console.log('I am a function');
}

hello();

function moneybag(){
    var money = 4500;
    console.log(`I have ${money} taka`)
}

moneybag();

function addition(x, y){
    let sum = x+y;
    console.log(`Sum is ${sum}`);
    return sum;
}

addition(1, 2);

const result = addition(10, 40);
console.log(result);