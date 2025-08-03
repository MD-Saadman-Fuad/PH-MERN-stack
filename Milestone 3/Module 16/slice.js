const address = 'andarmanik';
const address1 = 'kella'
const part = address.slice(0, 5);

console.log(part)

const sentence = "I go to school";

console.log(sentence.split(''))
console.log(sentence.split(' '))

const part1 = sentence.split(' ');

console.log(part1.join(''))
console.log(part1.join(' | '))

const concatination = address + ' ' + address1;
const concatination1 = address.concat(' ').concat(address1);

console.log(concatination)
console.log(concatination1)

// includes
console.log(address.includes('x'));
console.log(address.includes("d"));