const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];


// Map
console.log('-----Map-----');
const productPrice = products.map(product=> product.price);
console.log(...productPrice); // [1000, 500, 300]

const productNames = products.map(product=> product.name);
console.log(...productNames); // ['Laptop', 'Phone', 'Tablet'] 

// ForEach
console.log('-----ForEach-----');
products.forEach(product=> console.log(product.name));

products.forEach(product=> {
    if(product.price>400){
        console.log('Kom Dami',product.name);
    }
});


// Filter
console.log('-----Filter-----');

const result = products.filter(product => product.name === 'Phone');
console.log(result); // [{ id: 2, name: "Phone", price: 500 }]

const expensive = products.filter(product => product.price > 400);
const expensiveNames = expensive.map(product => product.name);
console.log('kom dami', ...expensiveNames); // ['Laptop', 'Phone']


// Find
console.log('-----Find-----'); //gets the first occurance , if not found returns undefined
const found = products.find(product => product.name === 'Laptop');
console.log(found.name); // { id: 1, name: "Laptop", price: 1000 }