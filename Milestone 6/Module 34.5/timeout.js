console.log('1');

const timeout = setTimeout(() => {
    console.log('2');
}, 2000);

const timeout2 = setTimeout(() => {
    console.log('22');
}, 2000);

console.log('3');

console.log('timeout:', timeout);

console.log('timeout2:', timeout2);

// clearTimeout(timeout2);