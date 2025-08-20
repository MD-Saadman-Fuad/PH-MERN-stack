const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (const number of numbers){
    console.log(number);
}


const products = [ {name: 'Laptop', price: '12000'}, 
    {name: 'mobile', price: '3000'}, 
    {name: 'Pad', price: '1000'}, 
    {name: 'desk', price: '2000'},  ]



for (const product of products){
    console.log(product);
}

function matchedProducts( products, search) {
    const matched = [];
    for (const product of products){
    // console.log(product);
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
    }
}
return matched;
}

const result = matchedProducts(products, 'Pad');
console.log(result);