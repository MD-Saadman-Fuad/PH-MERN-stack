const product = [23, 12, 13];
const compProduct = product;

console.log(product, compProduct);

compProduct[0] = 0;
console.log(product, compProduct);

//so array copy kore cahnge korle location/memory te change hoy so shob jaygay change ashe
// er jnno amra alada bhabe copy korbo

let product1 =[];

for (let pro of product){
    product1.push(pro);
}
console.log(product, product1);

product1[0] = 1;

console.log(product, product1);

//////////////////////////////

let product2 =Array.from(product);

console.log(product, product2);

product2[0] = 1;

console.log(product, product2);

/////////////////////////////////

const product3 = [].concat(product);
console.log(product, product3);

product3[0] = 1;

console.log(product, product3);

/////////////////////////////////


const product4 = [...product]; //spread operator
console.log(product, product4);

product4[0] = 1;

console.log(product, product4);