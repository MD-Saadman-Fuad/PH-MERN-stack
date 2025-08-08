

function evenSizedString(str){

    const size = str.length;
    if (size%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    console.log(str, size);
}

evenSizedString('Dhaka');

function doDoubleorTriple(number, status){
    if(status === true){
        return number * 2;
    }else{
        return number*3;
    }
}

console.log(doDoubleorTriple(5, false))