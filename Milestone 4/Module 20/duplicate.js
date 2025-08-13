
function noDuplicate(numbers){
    uniqueArr = [];
    for (let num of numbers){
        if (!uniqueArr.includes(num)){
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

function hasDuplicate(numbers){
    uniqueArr = [];
    for(let num of numbers){
        if(uniqueArr.includes(num)){
            return true;
        }else{
            uniqueArr.push(num);
        }
    }
    return false;
}


const numbers = [1, 2, 3, 4, 5, 2, 4, 6, 7, 3, 5, 7, 8, 9, 4, 0];
console.log(noDuplicate(numbers));
// console.log(numbers);
console.log(hasDuplicate(numbers));