console.log('one');
console.log('two');

setTimeout(callThree, 3000);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

// callThree();
// console.log('three');
console.log('four');

function callThree() {
    
        console.log('three');
};