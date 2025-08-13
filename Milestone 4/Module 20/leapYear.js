function isLeapYearSimple(year){
    if (year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYearSimple(2020));


function isLeapYearComplex(year){
    if (year % 100 !== 0 &&  year % 4 === 0){
        return true;
    }else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYearComplex(2004));