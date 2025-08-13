function maxWho(num1, num2){
    if (num1 > num2){
        return num1;
    }
    return num2;
}

console.log(maxWho(2, 3));

function maxWho3(num1, num2, num3){
    if (num1 > num2 && num1>num3){
        return num1;
    }else if(num2>num1 && num2 >num3){
        return num2
    }else{
        return num3;
    }
    
}

console.log(maxWho3(2, 3, 4));

console.log(Math.max(12, 13, 34));