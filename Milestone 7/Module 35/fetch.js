const personObj = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001",
    }, 
    friends: ["Mike", "Anna", "Tom"],
}

const jsonString = JSON.stringify(personObj);
// console.log(jsonString);

const jsonObj = JSON.parse(jsonString);
// console.log(jsonObj);

// fetch

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => console.log(data[0]))
// .catch(err => console.log(err));


const keys = Object.keys(personObj);
console.log(keys);

const values = Object.values(personObj);
console.log(values);

const entries = Object.entries(personObj);
console.log(entries);

// array of objects
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

const newData = {
    id: 4, name: "Monitor", price: 200
};

const newProducts = [...products, newData]; // add newData to products array
console.log(newProducts);

const remainingProducts = newProducts.filter(p => p.name!=="Phone"); // remove phone
console.log(remainingProducts);