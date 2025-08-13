const products = [
  { name: "Laptop", price: 1200, quantity: 10 },
  { name: "Smartphone", price: 800, quantity: 25 },
  { name: "Headphones", price: 150, quantity: 50 },
  { name: "Keyboard", price: 60, quantity: 40 },
  { name: "Monitor", price: 300, quantity: 15 }
];


function getTotalPrice(object){
    let total = 0;

    for(let obj of object){
        let objectPrice = obj.price * obj.quantity; 
        total += objectPrice;
    }
    return total;
}

console.log(getTotalPrice(products));