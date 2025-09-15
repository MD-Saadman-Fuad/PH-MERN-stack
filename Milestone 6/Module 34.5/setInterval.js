console.log('start');

console.log('1');

const intervalID = setInterval(() => {
    console.log('2');
}, 2000);

const intervalID2 = setInterval(() => {
    console.log('22');
}, 2000);

console.log('3');

console.log('intervalID:', intervalID);
console.log('intervalID2:', intervalID2);

// clearInterval(intervalID2);