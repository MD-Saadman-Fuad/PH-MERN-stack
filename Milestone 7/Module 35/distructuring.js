const friends = ['Michael', 'Steven', 'Peter']; 

const [first_friend, second_friend, third_friend] = friends;

console.log(first_friend, second_friend, third_friend); // Michael Steven Peter 


const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    friends: ['Mike', 'Bob']
};

const {name, age, address: {street, city}, friends: [first_friend1, second_friend1]} = person;

console.log(name, age, street, city, first_friend1, second_friend1); // John 30 123 Main St New York Mike Bob