console.log(5==10);
console.log(5<10);
console.log(5>10);
console.log(10==10);
console.log(10>=15);

console.log(10 != "10");
console.log(10!=="10");

if (3<10){
    console.log("3 is less than 10");
}else{
    console.log("You are an idiot");
}

const isBCS = true;
var hasCar = true;
const salary = 25000;

if ((isBCS)||((salary>20000 && hasCar))){
    console.log("Bhalo Manush");
}else{
    console.log("Jibone kisu korenai");
}

const price = 5000;

if (price>=5000){
    const discount = price* (10/100);
    const payAmount = price - discount;
    console.log(payAmount);
}else if(price > 2500){
    const discount = price (5/100);
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}


//Ternery 
age = 12

age >=18 ? console.log("Vote dew")  : console.log("Ghum Daw");

let Amount = 600;
let isLeader = true;

payablePrice = isLeader==true ? console.log("0") : console.log(Amount); 

newPayableAmount = isLeader===true ? price > 1000 ? price / 2 : 0 : price+1000;
console.log(newPayableAmount)