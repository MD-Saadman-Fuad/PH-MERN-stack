const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    },
    friends: ['Mike', 'Anna', 'Tom'],
    10: 'ten',
}

console.log(person.name); // John
console.log(person['name']); // John
console.log(person.address.city); // Anytown
console.log(person['address']['city']); // Anytown
console.log(person.friends[1]); // Anna
console.log(person[10]); // ten
console.log(person['10']); // ten

// dot notation can't be used if the property name is not a valid identifier
// For example, this would not work:
// console.log(person.10);
