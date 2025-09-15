function one (){
    two();
    console.log('one');
}

function two (){
    three();
    console.log('two');
}

function three (){
    setTimeout( () => {
        console.log('timeout 3');
    }, 0);
    four();
    console.log('three');
}
function four (){
    five();
    console.log('four');
}
function five (){
    setTimeout( () => {
        console.log('timeout 5');
    }, 0);
    console.log('five');
}

one();

console.log('start');