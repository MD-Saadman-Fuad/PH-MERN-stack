let data;
data = 0;
data = "";
data = " ";
data = "0";
data= false;
data=true;
data = null;
data = {};
data = [];
data = NaN;
data = -12; 
console.log(data); // undefined
if (data) {
    console.log("truthy");
} else {
    console.log("Falsy");
}
// Logical Not
if (!data) {
    console.log("Falsy");
}

// logical double not
if(!!data === true){
    console.log("Truthy");
}