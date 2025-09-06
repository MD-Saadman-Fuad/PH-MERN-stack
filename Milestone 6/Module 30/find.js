const numbers = [3, 4, 5, 6, 7, 8];

const firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven);

const friends = ['abul', 'babul', 'cabul', 'dabul', 'kabul', 'habul'];
const friendWithFiveLetters = friends.find(friend => friend.length === 5);
console.log(friendWithFiveLetters);