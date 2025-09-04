const product = {
    name: "Smartphone",
    price: 699,
    features: {
        camera: "12MP",
        battery: "4000mAh"
    }
};

const { name, price } = product;
console.log(`Product Name: ${name}, Price: $${price}`);


const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);