const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 300 }
];


function getTotal(object){
    total = 0;
    for (let obj of object){
        total += obj.price;
    }
    return total;
}

console.log(getTotal(products));