const numbers = [3, 4, 5, 6, 7, 8];

// const doubltIt = x => x*2;

// const makeIt = numbers.map(doubltIt);

const makeIt = numbers.map(x => x*2);
console.log(makeIt);

const friends = ['abul', 'babul', 'cabul', 'dabul'];
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);