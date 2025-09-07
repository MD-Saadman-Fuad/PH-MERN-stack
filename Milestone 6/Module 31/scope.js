name = "Doe"; // Global Scoped


if (true){
    const name = "John"; // Block Scoped
}

//console.log(name);

//hoisting example
console.log(age);
var age = 30;
console.log(age);
//console.log(age2); // ReferenceError: Cannot access 'age2' before initialization
let age2 = 31;
console.log(age2);  

//console.log(age3); // ReferenceError: Cannot access 'age3' before initialization
const age3 = 32;
console.log(age3);  
//console.log(age4); // ReferenceError: Cannot access 'age4' before initialization
{
    let age4 = 33;
    console.log(age4);  
}           

//console.log(age4); // ReferenceError: age4 is not defined
// Block Scoped