const getTax = (amount, taxRate) => amount*taxRate/100;

console.log(getTax(100, 15));

const getHalf = num => num/2;

console.log(getHalf(10));

const logIt = log => console.log(log);
logIt('hello');